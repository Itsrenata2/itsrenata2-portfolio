import { Button } from "../components/Button";

export function Message() {
  return (
    <section className="bg-fifth py-12 font-museomoderno text-center px-4">
      <h2 className="text-main font-bold text-3xl">Deixe uma mensagem!</h2>
      <form className="mt-12 flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full max-w-md h-10 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full max-w-md h-10 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
        />
        <textarea
          placeholder="Sua mensagem"
          className="w-full max-w-md h-32 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
        />
        <Button className="bg-secondary text-main hover:bg-main w-full max-w-md">
          Enviar
        </Button>
      </form>
    </section>
  );
}
