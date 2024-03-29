Title: Installing pip for Python in Blender
Date: 2018-09-30 18:05
Category: Python
Tags: Blender, pip
Slug: pip-blender-python
Authors: Peter Mortimer
Summary: A short guide on how to install pip for the Python version bundled with Blender.

If you are working on a Computer Vision project in Python that requires 3D scene renderings, then [Blender](https://www.blender.org/) is the way to go. Blender comes bundled with its own Python version, which can be used to write Python scripts for Blender. This is useful for automating rendering jobs, since Python in Blender provides you the **bpy** module, which gives you access to Blender data, classes, and functions. 

Unfortunately, the Python in Blender does not share libraries with your system's Python. But if you don't want to be limited to the Python Standard Library available for Python in Blender, then you can install pip for Python in Blender.

The blender Python binaries are here in the blender directory:

	/your-blender-path/2.xx/python/bin/python.exe

Use this python binary to run the [get-pip.py](https://bootstrap.pypa.io/get-pip.py) script from the [pip documentation](https://pip.pypa.io/en/stable/installing/) to install pip for Python in Blender. Don't forget to point explicitly to the python binary from your blender version. The installation command will look something like this:

	/your-blender-path/2.xx/python/bin/python.exe /Downloads/get-pip.py

I ran the installation on Windows, which required me to open a Terminal with admin priviliges to execute the **pip.exe**. Use this version of pip from Python in Blender (not the pip from your system's Python) to install 3rd party modules for Blender in Python: 

	/your-blender-path/2.xx/python.exe pip install module

This should allow you to install 3rd party modules for your scripts in Python in Blender.

## References

Read these StackExchange questions for more information on installing pip for Python in Blender. My post is based on their answers:

- [Advantages of using Python in Blender for Animation?](https://blender.stackexchange.com/questions/5596/advantages-of-using-python-in-blender-for-animation)
- [How can I run blender from command line or a python script without opening a GUI?](https://blender.stackexchange.com/questions/1365/how-can-i-run-blender-from-command-line-or-a-python-script-without-opening-a-gui)
- [How to use PIP with Blender's bundled Python?](https://blender.stackexchange.com/questions/56011/how-to-use-pip-with-blenders-bundled-python)