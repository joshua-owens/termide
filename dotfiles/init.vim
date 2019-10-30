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
Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
Plug 'ctrlpvim/ctrlp.vim'
Plug 'scrooloose/nerdtree'
Plug 'ryanoasis/vim-devicons'
"Plug 'yggdroot/indentline'
Plug 'mileszs/ack.vim'
Plug 'jiangmiao/auto-pairs'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'pangloss/vim-javascript'
Plug 'leafgarland/typescript-vim'
Plug 'maxmellon/vim-jsx-pretty'
Plug 'ekalinin/dockerfile.vim'
Plug 'danilo-augusto/vim-afterglow'
Plug 'w0rp/ale'
Plug 'jparise/vim-graphql'
Plug 'editorconfig/editorconfig-vim'
call plug#end()

" ESLint
let g:ale_sign_error = 'X'
let g:ale_sign_warning = '!'
highlight ALEErrorSign ctermbg=NONE ctermfg=red
highlight ALEWarningSign ctermbg=NONE ctermfg=yellow
let g:ale_fixers = {
      \'javascript': ['eslint'],
\}
let g:ale_fix_on_save = 1

filetype plugin indent on
set t_Co=256
set t_ut=
syntax on
colorscheme afterglow
let g:airline_theme='afterglow'

" Nerd Tree
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | endif
map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'
let g:NERDTreeShowHidden=1

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

