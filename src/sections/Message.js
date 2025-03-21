import { Button } from "../components/Button";

export function Message() {
  return (
    <section className="bg-fifth py-12 font-museomoderno text-center">
      <h2 className="text-main font-bold text-3xl font-museomoderno">
        Deixe uma mensagem!
      </h2>
      <form>
        <div className="flex flex-row items-center gap-2 justify-center mt-12">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-96 h-10 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-96 h-10 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
            />
            <Button className="bg-secondary text-main hover:bg-main">
              Enviar
            </Button>
          </div>

          <div>
            <textarea
              placeholder="Sua mensagem"
              className="w-96 h-32 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
