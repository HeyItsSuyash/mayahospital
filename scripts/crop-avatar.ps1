Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Suyash\.gemini\antigravity-ide\brain\39fed0ff-21e7-4580-ac25-79db24f40cc3\suchi_purple_avatar_1791936414616.jpg"
$destPath = Join-Path (Get-Location).Path "public\suchi_avatar.png"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$size = 512
$dest = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Clip into a perfect smooth circle with no outer white edge
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$g.SetClip($path)

# Draw image centered
$g.DrawImage($src, [System.Drawing.Rectangle]::new(0, 0, $size, $size), [System.Drawing.Rectangle]::new(125, 122, 770, 770), [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$src.Dispose()

$dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Dispose()

Write-Host "Created clean borderless $destPath successfully"
