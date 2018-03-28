# Set up .config directory 
if [ ! -d ~/.config ]; then
  echo "Making .config directory in home directory"
  mkdir ~/.config
fi

# Set up nvim inside .config
if [ ! -d ~/.config/nvim ]; then
  echo "Making nvim direcotry in .config directory"
  mkdir ~/.config/nvim
fi

# Move init.vim in the proper directory
cp ../init.vim ~/.config/nvim/init.vim
