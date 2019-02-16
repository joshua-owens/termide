" Basic Settings
set number
set backspace=indent,eol,start
set shiftwidth=2
set encoding=utf8
set clipboard=unnamed
filetype plugin indent on
" Unhide quotes
set conceallevel=0
let g:vim_json_syntax_conceal = 0
set magic

" Plugins
call plug#begin('~/.nvim/plugged')
Plug 'bling/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'editorconfig/editorconfig-vim'
Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
Plug 'ctrlpvim/ctrlp.vim'
Plug 'scrooloose/nerdtree'
Plug 'wakatime/vim-wakatime'
Plug 'ryanoasis/vim-devicons'
Plug 'yggdroot/indentline'
Plug 'scrooloose/syntastic'
Plug 'elzr/vim-json'
Plug 'roxma/nvim-yarp'
Plug 'roxma/vim-hug-neovim-rpc'
Plug 'mileszs/ack.vim'
Plug 'jiangmiao/auto-pairs'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'jelera/vim-javascript-syntax'
Plug 'mxw/vim-jsx'
Plug 'ekalinin/dockerfile.vim'
Plug 'plasticboy/vim-markdown'
Plug 'jdsimcoe/abstract.vim'
Plug 'w0rp/ale'
call plug#end()

" Syntax Linter
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

" deoplete config
let g:deoplete#enable_at_startup = 1

filetype plugin indent on
set t_Co=256
set t_ut=
syntax on
colorscheme abstract
let g:airline_theme='abstract'
set t_8b=^[[48;2;%lu;%lu;%lum
set t_8f=^[[38;2;%lu;%lu;%lum]]]]
hi Normal guibg=NONE ctermbg=NONE

" Nerd Tree
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | endif
map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'
let g:NERDTreeShowHidden=1

" TagBar
nmap <C-o> :TagbarToggle<CR>

" CTRLP
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/](\.(git|hg|svn)|node_modules|vendor|docs)$',
  \ 'file': '\v\.(exe|so|dll|class|png|jpg|jpeg)$',
\}

" Fonts
set guifont=*
let g:airline_powerline_fonts = 1
let g:Powerline_symbols = 'fancy'
set t_ZH=^[[3m
set t_ZR=^[[23m

" EditorConfig
 let g:EditorConfig_exec_path = '/usr/local/Cellar/editorconfig/0.12.2/bin/editorconfig'
