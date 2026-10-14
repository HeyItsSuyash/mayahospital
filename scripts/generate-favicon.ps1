Add-Type -AssemblyName System.Drawing

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $baseDir
$srcFile = Join-Path $projectRoot "public\White Caduceus Laurel Monogram.png"
$destFile = Join-Path $projectRoot "public\favicon-purple.png"
$destSvg = Join-Path $projectRoot "public\favicon-purple.svg"

Write-Host "Reading $srcFile"
$src = [System.Drawing.Bitmap]::FromFile($srcFile)

# Create 64x64 favicon
$size = 64
$dest = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Imperial Royal Velvet Plum circle background (#240b3b)
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 36, 11, 59))
$g.FillEllipse($bgBrush, 1, 1, $size - 3, $size - 3)

# Purple/Violet subtle border (#a855f7)
$borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 168, 85, 247), 2)
$g.DrawEllipse($borderPen, 1, 1, $size - 3, $size - 3)

# Fit monogram inside with clean padding
$padding = 10
$availableW = $size - ($padding * 2)
$availableH = $size - ($padding * 2)
$scale = [Math]::Min($availableW / $src.Width, $availableH / $src.Height)
$w = [int]($src.Width * $scale)
$h = [int]($src.Height * $scale)
$x = [int](($size - $w) / 2)
$y = [int](($size - $h) / 2)

$g.DrawImage($src, $x, $y, $w, $h)

$g.Dispose()
$src.Dispose()
$dest.Save($destFile, [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Dispose()

Write-Host "Created $destFile successfully"
