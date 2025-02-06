import { Routes } from '@angular/router';
import { AlunoCadastrarComponent } from './components/admin/aluno-cadastrar/aluno-cadastrar.component';
import { AlunoListarComponent } from './components/admin/aluno-listar/aluno-listar.component';
import { ProfessorCadastrarComponent } from './components/admin/professor-cadastrar/professor-cadastrar.component';
import { ProfessorListarComponent } from './components/admin/professor-listar/professor-listar.component';
import { BibliotecarioCadastrarComponent } from './components/admin/bibliotecario-cadastrar/bibliotecario-cadastrar.component';
import { BibliotecarioListarComponent } from './components/admin/bibliotecario-listar/bibliotecario-listar.component';
import { NotfoundComponent } from './components/layout/page/notfound/notfound.component';
import { LivroCadastrarComponent } from './components/admin/livro-cadastrar/livro-cadastrar.component';
import { LivroListarComponent } from './components/admin/livro-listar/livro-listar.component';
import { ProfessorAtualizarComponent } from './components/admin/professor-atualizar/professor-atualizar.component';
import { AlunoAtualizarComponent } from './components/admin/aluno-atualizar/aluno-atualizar.component';
import { BibliotecarioAtualizarComponent } from './components/admin/bibliotecario-atualizar/bibliotecario-atualizar.component';
import { LivroAtualizarComponent } from './components/admin/livro-atualizar/livro-atualizar.component';
import { LocacaoCadastrarComponent } from './components/admin/locacao-cadastrar/locacao-cadastrar.component';
import { LocacaoAtualizarComponent } from './components/admin/locacao-atualizar/locacao-atualizar.component';
import { LocacaoListarComponent } from './components/admin/locacao-listar/locacao-listar.component';
import { AvaliacaoCriarComponent } from './components/admin/avaliacao-criar/avaliacao-criar.component';
import { AvaliacaoListarComponent } from './components/admin/avaliacao-listar/avaliacao-listar.component';
import { AvaliacaoAtualizarComponent } from './components/admin/avaliacao-atualizar/avaliacao-atualizar.component';
import { AvaliacaoAlunoComponent } from './components/admin/avaliacao-aluno/avaliacao-aluno.component';
import { AvaliacaoProfessorComponent } from './components/admin/avaliacao-professor/avaliacao-professor.component';

export const routes: Routes = [
    { path: 'admin/aluno/aluno-cadastrar', component: AlunoCadastrarComponent },
    { path: 'admin/aluno/aluno-listar', component: AlunoListarComponent },
    { path: 'admin/aluno/aluno-atualizar/:id', component: AlunoAtualizarComponent },
    { path: 'admin/professor/professor-cadastrar', component: ProfessorCadastrarComponent },
    { path: 'admin/professor/professor-listar', component: ProfessorListarComponent },
    { path: 'admin/professor/professor-atualizar/:id', component: ProfessorAtualizarComponent },
    { path: 'admin/bibliotecario/bibliotecario-cadastrar', component: BibliotecarioCadastrarComponent },
    { path: 'admin/bibliotecario/bibliotecario-listar', component: BibliotecarioListarComponent },
    { path: 'admin/bibliotecario/bibliotecario-atualizar/:id', component: BibliotecarioAtualizarComponent },

    { path: 'admin/livro/livro-cadastrar', component: LivroCadastrarComponent },
    { path: 'admin/livro/livro-listar', component: LivroListarComponent },
    { path: 'admin/livro/livro-atualizar/:id', component: LivroAtualizarComponent },

    { path: 'admin/avaliacao/avaliacao-cadastrar', component: AvaliacaoCriarComponent },
    { path: 'admin/avaliacao/avaliacao-listar', component: AvaliacaoListarComponent },
    { path: 'admin/avaliacao/avaliacao-atualizar/:id', component: AvaliacaoAtualizarComponent },

    { path: 'admin/avaliacao/avaliacao-aluno/:id', component: AvaliacaoAlunoComponent },
    { path: 'admin/avaliacao/avaliacao-professor/:id', component: AvaliacaoProfessorComponent },

    { path: 'admin/locacao/locacao-cadastrar', component: LocacaoCadastrarComponent },
    { path: 'admin/locacao/locacao-listar', component: LocacaoListarComponent },
    { path: 'admin/locacao/locacao-atualizar/:id', component: LocacaoAtualizarComponent },
    { path: '', redirectTo: 'admin/aluno/aluno-listar', pathMatch: 'full' },
    {
        path: 'errors/not-found',
        component: NotfoundComponent
    },
        {
        path: '**', 
        redirectTo: '/errors/not-found'
    }


];
