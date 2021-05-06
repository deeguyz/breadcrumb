const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

let root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "filea.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
            projects: {
              type: "dir",
              children: {
                mysupersecretproject: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

let path = [];

function findNode(obj, target, dat) {
  if (target === "root") {
    return root;
  }

  if (dat === target) {
    return obj;
  } else {
    for (let i in obj.children) {
      let node = obj.children[i];

      if (i === target) {
        path.push(i);
        return findNode(node, target, i);
      } else if (i != target && node.children != undefined) {
        path.push(i);
        return findNode(node, target, i);
      }
    }
  }

  return "empty";
}

app.get("/path/:mypath", (req, res) => {
  path = [];
  const data = findNode(root, req.params.mypath, "");
  res.send({ data, path });
});
