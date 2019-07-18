" Basic Settings
syntax on
set number
set backspace=indent,eol,start
set shiftwidth=2
set encoding=utf8
set clipboard=unnamed

" Unhide quotes
set conceallevel=0
let g:vim_json_syntax_conceal = 0
set magic

" Tab
set expandtab
set tabstop=2
autocmd FileType html setlocal shiftwidth=2 tabstop=2
autocmd FileType php setlocal shiftwidth=4 softtabstop=4
autocmd FileType scss setlocal shiftwidth=2 tabstop=2
autocmd FileType js setlocal shiftwidth=2 tabstop=2
" Runtime
runtime macros/matchit.vim
runtime macros/colors/*.vim

" Vundle
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'editorconfig/editorconfig-vim'
Plugin 'elzr/vim-json'
Plugin 'yggdroot/indentline'
Plugin 'valloric/youcompleteme', { 'do': './install.py --tern-completer' }
Plugin 'w0rp/ale'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'bling/vim-airline'
Plugin 'vim-vdebug/vdebug'
Plugin 'mattn/emmet-vim'
Plugin 'pangloss/vim-javascript'
Plugin 'mxw/vim-jsx'
Plugin 'ryanoasis/vim-devicons'
Plugin 'joshdick/onedark.vim'
" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line

" Color Scheme
colorscheme onedark 
let g:airline_theme='onedark'
"set t_Co=256

" Ale
let g:ale_sign_error = '●' " Less aggressive than the default '>>'
let g:ale_sign_warning = '.'
let g:ale_lint_on_enter = 0 " Less distracting when opening a new file

" Emmet
let g:user_emmet_leader_key='<Tab>'
let g:user_emmet_settings = {
  \  'javascript.jsx' : {
    \      'extends' : 'jsx',
    \  },
  \}

" Nerd Tree
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | endif
map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'
let g:NERDTreeShowHidden=1

" CtrlP Key Mapping
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/](\.(git|hg|svn)|node_modules|vendor|docs)$',
  \ 'file': '\v\.(exe|so|dll|class|png|jpg|jpeg)$',
\}

" VDEBUG
let g:vdebug_options={
\    'port': 9000,
\    'path_maps': {'/var/www': '/Volumes/Code/dealerinspire/dealerinspire-core'},
\    'break_on_open': 0
\}

" Powerline
set guifont=MelsoLGLDZ\ Nerd\ Font\ 10
let g:airline_powerline_fonts = 1
let g:Powerline_symbols = 'fancy'
