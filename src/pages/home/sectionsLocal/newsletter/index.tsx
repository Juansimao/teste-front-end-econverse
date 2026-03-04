import style from './newsletter.module.scss';

export function SectionsNewsletter() {
  return (
    <section className={style.newsletter}>
      <div className="containerConteudo">

        {/* Conteúdo da newsletter */}
        <div className={style.newsletterContent}>

          {/* Texto */}
          <div className={style.newsletterText}>
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
              da Econverse.
            </p>
          </div>

          {/* Formulário */}
          <form className={style.newsletterForm}>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
            />

            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />

            <button type="submit">INSCREVER</button>

            {/* Termos */}
            <label className={style.newsletterTerms}>
              <input type="checkbox" name="terms" defaultChecked/>
              Aceito os termos e condições
            </label>
          </form>

        </div>
      </div>
    </section>
  );
}
