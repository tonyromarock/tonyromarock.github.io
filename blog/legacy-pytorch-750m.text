Title: Installing legacy PyTorch for Windows
Date: 2018-09-12 14:20
Category: Python
Tags: legacy PyTorch, Windows, GeForce GT 750M
Slug: legacy-pytorch-750m
Authors: Peter Mortimer
Summary: Some helpful notes when installing Pytorch 0.3.0 on a Windows PC with a GeForce GT 750M.

It can be useful to have a working version of PyTorch installed on your outdated local Windows machine to be able to run the prediction of pre-trained models written in PyTorch. I encountered a few roadblocks during my installation, where I really wished for more information on the web somewhere. Therefore, here are some notes I have made while installing PyTorch on my outdated laptop (Acer Aspire from 2013).

You cannot run the most recent version of PyTorch (0.4.0 at the time of writing) with GPU support on an older machine with an outdated graphics card. In my case my Acer Aspire from 2013 has a NVIDIA GeForce GT 750M. The GeForce GT 750M has a CUDA compute capability of 3.0. You can look up the compute capability of all CUDA GPUs on [this official NVIDIA page](https://developer.nvidia.com/cuda-gpus).
The most recent version of PyTorch that still supports a GPU with a compute capability of 3.0 is PyTorch 0.3.0.

[This GitHub repository](https://github.com/peterjc123/pytorch-scripts) from user **peterjc123** is very helpful when trying to install PyTorch on Windows. The windows-specific PyTorch packages are available as conda packages here. 
The README of this repository also refers to a [Google Drive](https://drive.google.com/drive/folders/0B-X0-FlSGfCYdTNldW02UGl4MXM) that includes conda packages for legacy versions of PyTorch for Windows. Here you have to check for the correct conda package. In my case I am running Python 3.6 and CUDA 8.0. I had to download the following compressed package:

	pytorch_legacy-0.3.0-py36_0.3.0cu80.tar.bz2

Move the compressed conda package to your working directory. Now you can locally install this conda package in your conda environment with the following command.

	conda install --offline pytorch_legacy-0.3.0-py36_0.3.0cu80.tar.bz2

You can quickly check if this version of PyTorch correctly detects the CUDA installation in your Python interpreter with the following commands:

	import torch
	torch.cuda.is_available()

If this returns **True** then you should be ready to run legacy PyTorch on Windows.

