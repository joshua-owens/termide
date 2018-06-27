# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=/Users/joshowens/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="agnoster"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git mercurial)

source $ZSH/oh-my-zsh.sh


# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

export EDITOR='nvim'
# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

#########################################################
# Directories
#########################################################

# Shortcuts to various locations
alias core='cd ~/code/dealerinspire/dealerinspire-core/'
alias dealer='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/themes/DealerInspireDealerTheme'
alias common='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/themes/DealerInspireCommonTheme'
alias themes='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/themes'
alias chug='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/themes/DealerInspireCommonTheme && gulp'
alias train='cd ~/code/training_tool/'
alias codewars='cd ~/code/codewars/'
alias bash='cd && code .bash_profile'
alias dimg='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/themes/DealerInspireDealerTheme/images && open -a imageoptim .'
alias sf='cd ~/code/salesforce-extension'
alias openzsh='code ~/.zshrc'
alias difo='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins/di-fixed-ops'
alias ticket='cd ~/code/desk-stats-app/'
alias lfp='cd ~/code/legendary-few/vagrant-local/www/wordpress-default/public_html/wp-content/plugins/wp-guild-management'
alias pall='cd ~/Documents && yes | sh pullall.sh'

# DI Plugins
alias plugins='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins'
alias inventory='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins/inventory'
alias vwca="cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins/dealerinspire-vw-canada-integration"
alias fca="cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins/dealerinspire-fca-integration"
alias specialoffers="cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins/dealer-inspire-special-offers"
alias invdis="cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/plugins/dealerinspire-inventory-display"
alias ci="code-insiders"
# SSH Shortcuts
alias pod1='ssh jowens@deploy.pod1.dealerinspire.com'
alias pod2='ssh jowens@deploy.pod2.dealerinspire.com'
alias pod3='ssh jowens@deploy.pod3.dealerinspire.com'
alias pod4='ssh jowens@deploy.pod4.dealerinspire.com'
alias pod5='ssh jowens@deploy.pod5.dealerinspire.com'
alias pod6='ssh jowens@deploy.pod6.dealerinspire.com'
alias pod7='ssh jowens@deploy.pod7.dealerinspire.com'
alias pod8='ssh jowens@deploy.pod8.dealerinspire.com'
alias pod9='ssh jowens@deploy.pod9.dealerinspire.com'
alias pod10='ssh jowens@deploy.pod10.dealerinspire.com'
alias pod11='ssh jowens@deploy.pod11.dealerinspire.com'
alias pod12='ssh jowens@deploy.pod12.dealerinspire.com'
alias pod13='ssh jowens@deploy.pod13.dealerinspire.com'
alias dev='ssh jowens@a.dev.dealerinspire.com'
alias ..='cd ..'

# Tmux
export TERM=xterm-256color

# Tail debug.log in the wp-content folder
alias debuglog='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content && tail -f debug.log'
alias dbug='open -a "Console" ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content/debug.log'
# navigate to vagrant folder
alias vf='cd ~/code/dealerinspire/vagrant/com.dealerinspire.wordpress'

#########################################################
# Apps and Tools
#########################################################

# Mercurial command line aliases
alias hgl='hg log -G -b . -l 10' # Show the last ten revisions for your current branch in terminal
alias hgs='hg status'
alias hgp='hg pull -u'

# GIT command line aliases
alias gs='git status'
alias gd='git difftool'
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
alias gmls='git ls-files -m'
alias gdls='git ls-files --deleted'
alias gmra='git rm $(git ls-files --deleted)'

# Vagrant commands
alias vup='cd ~/code/dealerinspire/vagrant/com.dealerinspire.wordpress && vagrant up'
alias vssh='cd ~/code/dealerinspire/vagrant/com.dealerinspire.wordpress && vagrant ssh'

# Start a sass watch manually (works in dealer theme and common)
alias sasswatch="sass --watch css:css --style=compressed"

# Tail debug.log in the wp-content folder
alias debuglog='cd ~/code/dealerinspire/dealerinspire-core/dealer-inspire/wp-content && tail -f debug.log'

# open Google Chrome will allow file access flag (useful for ajax testing)
alias chromesafe='open -a Google\ Chrome --args --allow-file-access-from-files'

# update Quiver documentation
alias qup='cd ~/Dropbox/di-quiver-notebooks; git pull origin master; open -a "Quiver.app"'

#########################################################
# System aliases
#########################################################

# Some cd shortcuts
alias ..='cd ..' # up one level
alias ...='cd ../..' # up two levels
alias ....='cd ../../..' # up three levels

# Hide desktop icons -- good for client presentations
alias desktop_off='defaults write com.apple.finder CreateDesktop -bool false; killall Finder'
alias desktop_on='defaults write com.apple.finder CreateDesktop -bool true; killall Finder'

# Hide or show hidden files
alias show_hidden='defaults write com.apple.finder AppleShowAllFiles -boolean true; killall Finder'
alias hide_hidden='defaults write com.apple.finder AppleShowAllFiles -boolean false; killall Finder'

# Display file sizes in terminal for current directory
alias s='du -ch -d 1 .'

# Open the iOS simulator for testing (requires xcode)
alias ios='open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/'

# Open .bash_profile in sublime text for editing
alias bashprofile="subl ~/.bash_profile"

# Get whatever copy utility exists
alias copy="pwd | pbcopy"

#########################################################
# SSH & Server aliases
#########################################################

# APACHE RESTART
alias sr="sudo apachectl restart"

# Flush the system DNS
alias dns_flush="sudo discoveryutil udnsflushcaches"

# Tail the PHP error log (for MAMP)
alias php_errors='tail -f /Applications/MAMP/logs/php_error.log'

# Edit local hosts file in sublime
alias hosts="sudo subl /etc/hosts"

#########################################################
# Extras
#########################################################

# COLOR DIRECTORIES AND FILES
export CLICOLOR=1
#export LSCOLORS=GxFxCxDxBxegedabagaced

# Setting PATH for Python 3.5
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.5/bin:${PATH}"
export PATH

##
# Your previous /Users/joshowens/.bash_profile file was backed up as /Users/joshowens/.bash_profile.macports-saved_2016-10-26_at_13:16:53
##

# MacPorts Installer addition on 2016-10-26_at_13:16:53: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.


# added by Anaconda3 4.2.0 installer
export PATH="/Users/joshowens/anaconda/bin:$PATH"

#

export NVM_DIR="/Users/joshowens/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
alias neo="nvim"
alias vim="nvim"



alias devToolsAPI="cd ~/code/com.dealerinspire.didevtool.api/"

# added by travis gem
[ -f /Users/joshowens/.travis/travis.sh ] && source /Users/joshowens/.travis/travis.sh

export PATH="/usr/local/opt/php@7.1/bin:$PATH"
export PATH="/usr/local/opt/php@7.1/sbin:$PATH"
