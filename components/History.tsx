export function History({
  position,
  company,
  from,
  to,
  achievements,
}: {
  position: string;
  company: string;
  from: string;
  to: string;
  achievements: string[];
}) {
  return (
    <>
      <h4 className="text-lg uppercase mb-5 mt-5">{position}</h4>
      <div className="font-serif ml-10">
        <p className="text-xl font-bold">{company}</p>
        <p className="mb-2 text-lg">
          {from} - {to}
        </p>
        <ul className="ml-5 list-disc text-lg">
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
