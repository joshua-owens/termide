# Updates the dotfiles repo with any changes that may have been made
# to the dotfiles once they were moved into their proper directories 
# on a given machine


read -p "[96mThis is going to wipe any uncommited changes in the dotfiles repo, are you sure? " -n 1 -r
echo    # moved to a new line
if [[ $REPLY =~ ^[Yy]$  ]]
then
  # Get the updated version on .hyper.js 
  cp ~/.hyper.js ../.hyper.js
  echo "[92m.hyper.js updated"

  # Get the updated version of init.vim 
  cp ~/.config/nvim/init.vim ../init.vim
  echo "[92minit.vim updated"

  # Get updated version of .tmux.conf 
  cp ~/.tmux.conf ../.tmux.conf
  cp ~/.tmux.conf.local ../.tmux.conf.local
  echo "[92m.tmux.conf updated"

  # Get updated version of .zshrc
  cp ~/.zshrc ../.zshrc
  echo "[92m.zshrc updated"

  # Get updated version of .vimrc
  cp ~/.vimrc ../.vimrc
  echo "[92m.vimrc updated"

else
  echo "[91mDotfiles NOT updated"
fi
