from moviepy.editor import VideoFileClip
import os

def gif_to_webm(input_path, output_path, quality=50, speed_factor=5, fps=30):
    """
    Convert a GIF to a WebM file with size-efficient encoding and speed adjustment.

    Parameters:
        input_path (str): Path to the input GIF file.
        output_path (str): Path to save the output WebM file.
        quality (int): CRF (Constant Rate Factor) for size-quality trade-off (lower is higher quality, default is 30).
        speed_factor (float): Factor by which to speed up the video.

    Returns:
        None
    """
    if not os.path.exists(input_path):
        raise FileNotFoundError(f"Input file not found: {input_path}")

    if not input_path.lower().endswith('.gif'):
        raise ValueError("Input file must be a GIF.")

    if not output_path.lower().endswith('.webm'):
        raise ValueError("Output file must be a WebM.")

    try:
        # Load the GIF using moviepy
        clip = VideoFileClip(input_path)

        # Adjust the speed of the video
        clip = clip.fx(lambda c: c.speedx(speed_factor))

        # Write the video using FFmpeg with WebM codec
        clip.write_videofile(
            output_path,
            codec="libvpx-vp9",
            audio=False,
            fps=fps,
            ffmpeg_params=["-crf", str(quality), "-b:v", "0"]
        )

        print(f"Conversion completed. WebM saved at: {output_path}")

    except Exception as e:
        raise RuntimeError(f"Failed to convert GIF to WebM: {e}")

# Example usage:
gif_to_webm("human_reacher_0.gif", "human_reacher_0.webm")
gif_to_webm("human_reacher_1.gif", "human_reacher_1.webm")
gif_to_webm("human_reacher_2.gif", "human_reacher_2.webm")