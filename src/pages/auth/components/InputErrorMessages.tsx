export default function InputErrorMessages({
  messages,
}: {
  messages: { [k: string]: string };
}) {
  return Object.entries(messages).map(([type, message]) => (
    <p className="text-end text-red-600" key={type}>
      - {message}
    </p>
  ));
}
