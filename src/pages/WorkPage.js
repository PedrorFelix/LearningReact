import { JobEntry } from "./JobEntry";
import './styles/WorkPage.css';

export function WorkPage(){

  return(
    <div className="WorkBanner">
      <h1 className="WorkTitle">Main Quests Completed</h1>
      <div className="JobList">
        <JobEntry position={"Junior Software Developer"} 
                  company={"VisionSpace Portugal"} 
                  location={"Figueira da Foz, Portugal"} 
                  beginnig={"May 2023"} end ={"February 2025"} 
                  description={"A small description of working here"}
        />

        <JobEntry position={"Intern"}
                  company={"VisionSpace Technologies GmbH"}
                  location={"Darmstadt, Germany"}
                  beginnig={"October 2022"} end ={"March 2023"} 
                  description={"A small description why this intership was actually great"}
        />

        <JobEntry position={"Bachelor's Degree"}
                  degree = {"IT and Multimedia"}
                  company={"Polythecnical Institute of Castelo Branco"}
                  location={"Castelo Branco, Portugal"}
                  beginnig={"October 2017"} end ={"September 2022"}
                  description={"A small description of my degree"}
        />
      </div>
      <i class="fa-solid fa-briefcase briefcaseIcon"></i>
    </div>
  )
}