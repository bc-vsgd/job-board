import Job from "./Job";

const Jobs = () => {
  return (
    <ul className="jobs">
      <li>
        <Job
          className="job color-E30413"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
      </li>
      <li>
        <Job
          className="job color-3EA535"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </li>
      <li>
        <Job
          className="job color-FFEE00"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
      </li>
      <li>
        <Job
          className="job color-039FE3"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
      </li>
      <li>
        <Job
          className="job color-F8C5AF"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
      </li>
      <li>
        <Job
          className="job color-E30413"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
      </li>
      <li>
        <Job
          className="job color-3EA535"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
      </li>
      <li>
        <Job
          className="job color-FFEE00"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
      </li>
      <li>
        <Job
          className="job color-039FE3"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </li>
    </ul>
  );
};
export default Jobs;
