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
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'ctrlpvim/ctrlp.vim'
Plug 'lokikl/vim-ctrlp-ag'
Plug 'scrooloose/nerdtree'
Plug 'ryanoasis/vim-devicons'
Plug 'jiangmiao/auto-pairs'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'pangloss/vim-javascript'
Plug 'leafgarland/typescript-vim'
Plug 'maxmellon/vim-jsx-pretty'
Plug 'styled-components/vim-styled-components', { 'branch': 'main' }
Plug 'ekalinin/dockerfile.vim'
Plug 'jacoborus/tender.vim'
Plug 'w0rp/ale'
Plug 'jparise/vim-graphql'
Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }
Plug 'editorconfig/editorconfig-vim'
Plug 'heavenshell/vim-jsdoc'
Plug 'scrooloose/nerdcommenter'
Plug 'xolox/vim-misc'
Plug 'xolox/vim-notes'
Plug 'tpope/vim-fugitive'
call plug#end()

let g:notes_directories = ['~/Documents/Notes']

" CoC
nnoremap <silent> K :call <SID>show_documentation()<CR>
function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  else
    call CocAction('doHover')
  endif
endfunction

" ALE
let g:ale_sign_error = '⛔'
let g:ale_sign_warning = '🚸'
highlight ALEErrorSign ctermbg=NONE ctermfg=red
highlight ALEWarningSign ctermbg=NONE ctermfg=yellow
let g:ale_fix_on_save = 1

" Go
let g:go_fmt_command = "goimports"

" JavaScript
let g:ale_fixers = {
      \'javascript': ['eslint'],
      \'typescript': ['eslint'],
\}

" Nerd Tree
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | endif
map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeDirArrowExpandable = '▸'
let g:NERDTreeDirArrowCollapsible = '▾'
let g:NERDTreeShowHidden=1

" CTRLP
nnoremap <c-f> :CtrlPag<cr>
vnoremap <c-f> :CtrlPagVisual<cr>
nnoremap <leader>ca :CtrlPagLocate
nnoremap <leader>cp :CtrlPagPrevious<cr>
let g:ctrlp_ag_ignores = '--ignore .git
   \ --ignore "deps/*"
   \ --ignore "_build/*"
   \ --ignore "node_modules/*"
   \ --ignore "vendor/*"
   \ --ignore "\v\.(exe|so|dll|class|png|jpg|jpeg)$"'
 " By default ag will search from PWD
 " But you may enable one of below line to use an arbitrary directory or,
 " Using the magic word 'current-file-dir' to use current file base directory
 " let g:ctrlp_ag_search_base = 'current-file-dir'
 " let g:ctrlp_ag_search_base = 'app/controllers' " both relative and absolute path supported

" Theme
filetype plugin indent on
set t_Co=256
set t_ut=
syntax on
colorscheme tender
let g:airline_theme='tender'
set guifont=*
let g:airline_powerline_fonts = 1
let g:Powerline_symbols = 'fancy'
set t_ZH=^[[3m
set t_ZR=^[[23m

