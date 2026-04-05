import os
from PIL import Image

def process_image(file_path):
    try:
        ext = os.path.splitext(file_path)[1].lower()
        img = Image.open(file_path)
        base = os.path.splitext(file_path)[0]
        
        if ext == '.webp':
            img.save(file_path, 'WEBP', quality=40) # Very aggressive for the 2.7MB one
            print(f"Aggressively compressed webp: {file_path}")
        elif ext == '.png':
            new_path = base + '.webp'
            img.save(new_path, 'WEBP', quality=70)
            if os.path.exists(file_path):
                os.remove(file_path)
            print(f"Converted PNG to WebP: {file_path} -> {new_path}")
        elif ext in ['.jpg', '.jpeg']:
            img.save(file_path, 'JPEG', quality=70, optimize=True)
            print(f"Compressed JPG: {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    # Specific big files
    targets = [
        'public/hero-bg.png', 'public/hero-1.png', 'public/hero-2.png',
        'public/images/aarti.webp', 'public/images/spa-hero.png',
        'public/images/dosa.png', 'public/images/paneer.png', 'public/images/pizza.png',
        'public/images/Cafe-img-1.jpg', 'public/images/Cafe-img-2.jpg', 'public/images/Cafe-img-3.jpg'
    ]
    for t in targets:
        if os.path.exists(t):
            process_image(t)

if __name__ == "__main__":
    main()
