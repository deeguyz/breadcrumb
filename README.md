# Breadcrumb file-browser component

This uses a JSON tree that displays a breadcrumb that shows the current location in the directory structure. This uses a single endpoint GET /path/{mypath} and recursively searches the tree for the given path. If the directory has children it will display the direct children and not the full subtree.

Each part of the breadcrumb and contents are separated and clickable

### Breadcrumb path

The breadcrumb is shown at the top and is separated by ' / '

### Contents

Below the path displays the contents of the current directory, or "THIS IS FILE: {filename}" if the path is a file. Clicking on any of the files or folders in this portion of the page should take you to that file/directory.

### DEMO

![alt-text](https://github.com/deeguyz/breadcrumb/blob/master/ezgif-2-7971c66fd4198.gif)