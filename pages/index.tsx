import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { History } from '../components/History';

const ResumeQuery = gql`
  {
    me {
      name
      lastname
      contact {
        phone
        email
        linkedIn
        github
      }
      history {
        position
        company
        from
        to
        achievements
      }
      academicBackground {
        university
        from
        to
        major
        degree
        description
      }
      skills
      languages
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);

  if (loading) {
    return <header>MJ, loading...</header>;
  }

  if (error) {
    return <header>Error!!!</header>;
  }

  return (
    <div>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto mt-20 mb-20 grid grid-cols-3 gap-x-20 gap-y-10">
        {/* Head left */}
        <div className="col-span-2 border-b-8 border-black">
          <h1 className="text-8xl leading-none font-bold mb-10">
            Mateusz
            <br />
            Jasiuk
          </h1>
        </div>

        {/* Head right */}
        <div className="text-right">
          <h2 className="text-4xl leading-none">
            JavaScript
            <br />
            Developer
          </h2>
          <div className="mt-6 font-serif">
            <p>+48 692083522</p>
            <p>mateusz.jasiuk@gmail.com</p>
            <p>https://linkedin.com/in/mateuszjasiuk</p>
            <p>https://github.com/mateuszjasiuk</p>
          </div>
        </div>
        {/* Body left */}
        <div>
          <h3 className="mb-5 text-xl font-bold uppercase">
            executive summary:
          </h3>
          <p className="text-2xl font-serif leading-snug">
            I am a JavaScript developer with more than 6 years of professional
            experience. I'm currently working as a full-stack engineer with a
            focus on EventSourcing.
          </p>
          <h3 className="mb-5 mt-5 text-xl font-bold uppercase">skills:</h3>
          <ul className="ml-5 list-disc text-lg font-serif">
            {data.me.skills.map((skill: string) => (
              <li>{skill}</li>
            ))}
          </ul>
          <h3 className="mb-5 mt-5 text-xl font-bold uppercase">langauges:</h3>
          <ul className="ml-5 list-disc text-lg font-serif">
            {data.me.languages.map((language: string) => (
              <li>{language}</li>
            ))}
          </ul>
          <h3 className="mb-5 mt-5 text-xl font-bold uppercase">
            academic background:
          </h3>
          <h4 className="text-lg uppercase mb-5 mt-5">
            uniwesyteta asdawd asd
          </h4>

          <p className="text-xl font-bold font-serif">
            (B.E.), Computer Science
          </p>
          <p className="mb-2 text-lg font-serif">2010 - 2014</p>
          <p className="text-lg font-serif">
            Bachelor's Work: Task organizer with a mobile client for Android
            devices.
          </p>
        </div>
        {/* Body right */}
        <div className="col-span-2">
          <h3 className="text-xl font-bold uppercase">professional history:</h3>
          {data.me.history.map((h: any) => (
            <History
              position={h.position}
              company={h.company}
              from={h.from}
              to={h.to}
              achievements={h.achievements}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
