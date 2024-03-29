Title: Using binvox-rw-py with Python 3
Date: 2018-10-30 23:00
Category: Python
Tags: binvox, pip
Slug: binvox-rw-py3
Authors: Peter Mortimer
Summary: My notes to using binvox-rw-py with Python 3.
Tocify: True

<h1 style="visibility:hidden;">Using binvox-rw-py with Python 3</h1>

The Python project **binvox-rw-py** is based on the [binvox](https://www.patrickmin.com/binvox/) project from Patrick Min. It is a simple and easy-to-use tool to convert 3D model files into 3D voxel grids (it supports most of the common 3D model file formats: .obj, .ply, .stl; the output format is typically the custom **.binvox** file format).

Some research projects in the field of 3D machine learning may use this library to create voxelized scenes for training. These voxelized scenes are used to train networks to learn a rudimentary understanding of the scene's geometry in a more easily quantifiable way. This is how I stumbled upon the [binvox-rw-py](https://github.com/dimatura/binvox-rw-py) module, which enables you to read .binvox files as 3-dimensional Numpy arrays in Python. You can also write numpy arrays into .binvox using binvox-rw-py.

### Troubles with writing .binvox files in Python 3

The original binvox-rw-py from the GitHub user [dimatura](https://github.com/dimatura/) has issues with writing .binvox files when running it in Python 3, since it was implemented with the byte handling of Python 2 in mind. I discovered this after a few frustrating hours by simply reading and writing the same .binvox file I generated for my project and comparing the resulting voxelized scenes using [viewvox](https://www.patrickmin.com/viewvox/) (which is also from Patrick Min):

![Comparing the resulting voxelized scenes when reading and writing the same .binvox file using binvox-rw-py with Python 3. The left image shows the broken scene voxelization using dimatura's module with Python 3, while the right image shows the correct scene voxelization using pclausen's module with Python 3.]({static}/images/binvox/binvox_write_compare.png)

Luckly, the GitHub user [pclausen](https://github.com/pclausen/) has already created a forked version of the [binvox-rw-py](https://github.com/pclausen/binvox-rw-py) module that resolves this issue. This makes it possible to also use binvox-rw-py with Python 3.

Unfortunately, the fixed binvox-rw-py module by pclausen does not seem as well known as the original module by dimatura if you compare the number of stars for each GitHub repository (at the time of writing dimatura's repository has 69 stars, while pclausen's repo only has 2 stars). pclausen has even originally created an [issue](https://github.com/dimatura/binvox-rw-py/issues/3) in dimatura's issue tracker for the binvox-rw-py regarding the Python 3 writing issue. The issue has not been closed even until today.

So I hope this post could help someone, who has been having issues using binvox-rw-py with Python 3 and save the person some time when trying to find the bug in his code.

To install pclausen's binvox-rw-py module using pip, simply write the following command:

	pip install git+https://github.com/pclausen/binvox-rw-py