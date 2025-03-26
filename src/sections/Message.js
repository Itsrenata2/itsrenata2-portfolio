import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../components/Button";

export function Message() {
  const [state, handleSubmit] = useForm("xblgkezv");

  if (state.succeeded) {
    return (
      <p className="text-main font-bold text-2xl text-center py-14">
        Obrigado por sua mensagem!
      </p>
    );
  }

  return (
    <section className="bg-fifth py-12 font-museomoderno text-center px-4">
      <h2 className="text-main font-bold text-3xl">Deixe uma mensagem!</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col items-center gap-4"
      >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Seu nome"
          className="w-full max-w-md h-10 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Seu e-mail"
          className="w-full max-w-md h-10 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Sua mensagem"
          className="w-full max-w-md h-32 p-2 rounded-lg border-2 border-main bg-transparent text-main placeholder:text-main"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          type="submit"
          disabled={state.submitting}
          className="bg-secondary text-main hover:bg-main w-full max-w-md"
        >
          Enviar
        </Button>
      </form>
    </section>
  );
}

export default Message;
