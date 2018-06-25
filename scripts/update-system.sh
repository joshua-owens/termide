 find ../ -type f -name ".*" ! -name ".git" -print0 | xargs -0 -I {} cp {} ~/
