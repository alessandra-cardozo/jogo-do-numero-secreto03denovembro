JS Game - Número Secreto 🎮

## Descrição do Projeto

O **JS Game - Número Secreto** é um jogo interativo onde o jogador deve adivinhar um número aleatório entre **1 e 50**.

O jogo combina **interatividade, acessibilidade e diversão**, incluindo:

* Limite de **10 tentativas**
* **Barra de progresso visual** indicando quantas chances restam
* **Histórico de tentativas** exibido em tempo real
* Botão **“Novo Jogo”** funcional
* Recorde salvo no **localStorage** (menor número de tentativas)
* Tema claro/escuro com toggle
* Suporte ao teclado (Enter envia chute)
* **Animações leves** ao acertar/errar
* Feedback de voz usando **ResponsiveVoice.js**

---

## Tecnologias

* **HTML5** – Estrutura semântica
* **CSS3** – Estilos, responsividade e animações
* **JavaScript (Vanilla)** – Lógica do jogo, histórico, barra de progresso e recorde
* **ResponsiveVoice.js** – Feedback em áudio

---

Estrutura do Projeto

```
/projeto-js-game
│
├─ index.html          # Estrutura HTML
├─ style.css           # Estilos e responsividade
├─ app.js              # Lógica do jogo
└─ img/                # Imagens do projeto
    ├─ ia.png
    ├─ code.png
    ├─ Ruido.png
    ├─ game_banner.png
    ├─ game_start.png
    ├─ game_over.png
    ├─ historico.gif
    ├─ progress_bar.gif
    ├─ recorde.png
    └─ theme_toggle.gif
```

---

Funcionalidades

### 1. Jogabilidade

Digite um número entre **1 e 50** e clique em **Chutar** ou pressione **Enter**.
O jogo informa se o número secreto é maior ou menor.


---

### 2. Limite de Tentativas

Máximo de **10 tentativas** por rodada.
Ao atingir o limite sem acertar, o jogo mostra **o número correto**.

---

### 3. Histórico de Tentativas

Cada chute é registrado em uma lista abaixo do input.
Permite ao jogador acompanhar os números já testados.

---

4. Barra de Progresso

Mostra visualmente quantas tentativas foram usadas.
Gradiente de **azul → vermelho**, indicando proximidade do limite.

---

5. Recorde

O menor número de tentativas é salvo no **localStorage**.
Exibido na tela, incentivando o jogador a melhorar seu recorde.

![Recorde de menor número de tentativas](./img/recorde.png)

---

6. Tema Claro/Escuro

Clique no botão 🌙 para alternar entre tema claro e escuro.
Também funciona com teclado (Enter).

---

7. Acessibilidade

* Inputs e botões com **ARIA labels**
* Compatível com leitores de tela
* Suporte a teclado (Enter envia chute)

---

Como Jogar

1. Abra `index.html` no navegador.
2. Digite um número entre **1 e 50**.
3. Clique em **Chutar** ou pressione **Enter**.
4. Observe o feedback visual e auditivo.
5. Veja o **histórico de tentativas** e acompanhe a **barra de progresso**.
6. Ao acertar ou atingir o limite, clique em **Novo Jogo**.
7. Alterne o tema clicando no botão 🌙 no canto superior direito.

---

Personalização

* Alterar **intervalo de números**: modifique `numeroLimite` no `app.js`.
* Alterar **máximo de tentativas**: modifique `maxTentativas` no `app.js`.
* Alterar **cores e estilos**: edite `style.css`.
* Alterar **voz do feedback**: configure `responsiveVoice.speak()` no `app.js`.

---

Responsividade

* Layout adaptável para **desktop, tablet e celular**.
* Elementos reorganizam-se para manter boa visualização.

---

Futuras Melhorias

* Sons de efeito ao acertar ou errar
* Barra de progresso com **gradiente animado**
* Ranking online de recordes
* Feedback visual mais sofisticado (animações ao acertar/errar)

---

Créditos

* Desenvolvido por **Alessandra Cardozo**
* Voz em português via **ResponsiveVoice.js**

---

