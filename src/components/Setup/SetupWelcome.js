import FilledButton from "../shared/buttons/FilledButton";

export default function SetupWelcome({ clickNext }) {
  return (
    <>
      <div className="text-5xl">Welcome!</div>
      <p className="text-center">
        Thank you for signing up for a free Sapaad Trial. We'll help you get up
        and running quickly in just a couple of steps.
      </p>
      <div>
        <FilledButton
          onClick={clickNext}
          text="Let's get started!"
          type="button"
        />
      </div>
    </>
  );
}
