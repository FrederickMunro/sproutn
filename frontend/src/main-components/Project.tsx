import ProjectItem from "./ProjectItem";
import { useUser } from "./UserContext";
import { Project as ProjectI } from './interfaces';
import DashboardProjectItem from "./DashboardProjectItem";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { useState } from "react";
import { PiListChecksBold } from "react-icons/pi";

interface Props {
  project: ProjectI;
}

const Project = ({ project }: Props) => {
  const { user, activeProject } = useUser();

  const [selectedManufacturer, setSelectedManufacturer] = useState<number>(0);


  const manufaturers = [
    {
      name: 'Manufacturer #1',
      details: {
        description: 'Manufacturer #1 description',
        features: 'Manufacturer #1 features',
        cost: 'Manufacturer #1 cost',
      }
    },
    {
      name: 'Manufacturer #2',
      details: {
        description: 'Manufacturer #2 description',
        features: 'Manufacturer #2 features',
        cost: 'Manufacturer #2 cost',
      }
    },
    {
      name: 'Manufacturer #3',
      details: {
        description: 'Manufacturer #3 description',
        features: 'Manufacturer #3 features',
        cost: 'Manufacturer #3 cost',
      }
    },
  ]

  const projectItems = [
    <div className='projects-brief-container'>
      <div className='projects-brief-subcontainer'>
        <div className='dashboard-project-header-container'>
          <div className='dashboard-project-header-title-container'>
            {project.icon}
            <h4 className='dashboard-project-header-title'>{project.name}</h4>
          </div>
          <div className={`dashboard-project-header-status-container ${project.status.toLowerCase().replace(' ', '-')}`}>
            <div className={`dashboard-project-header-status-circle ${project.status.toLowerCase().replace(' ', '-')}-dot`} />
            <p className='dashboard-project-header-status-text'>{project.status}</p>
          </div>
        </div>
        <div className='dashboard-project-content-container'>
          <DashboardProjectItem name='Project ID' content={`#${project.id}`} />
          <hr className='dashboard-project-item-vert' />
          <DashboardProjectItem name='Pending action' content={project.pending} />
          <hr className='dashboard-project-item-vert' />
          <DashboardProjectItem name='Elapsed time' content={project.time} />
        </div>
      </div>
    </div>,
    <div className='projects-prototype-container'>
      <div className='projects-prototype-subcontainer'>
        <div className='projects-prototype-title-container'>
          <LiaShippingFastSolid />
          <h4 className='projects-prototype-item-title'>Track your shipping</h4>
        </div>
        <div className='projects-prototype-subtext-container'>
          <p className='projects-prototype-subtext'>Recipient address:</p>
          <p className='projects-prototype-subtext'>{user.name}</p>
          <p className='projects-prototype-subtext'>{project.shippingAddress}</p>
        </div>
        <p className='projects-prototype-change-address'>Change delivery address</p>
        <div className='projects-prototype-shipping-container'>

        </div>
        <p className='projects-prototype-change-address'>More details</p>
      </div>
      <div className='projects-prototype-subcontainer'>
        <div className='projects-prototype-title-container'>
          <IoCloudDownloadOutline />
          <h4 className='projects-prototype-item-title'>Download your documents</h4>
        </div>
        <p className='projects-prototype-cloud-subtext'>Find your documents below</p>
        <div className='projects-prototype-image-container'>
          <p className='projects-prototype-image-text'>Sample product pictures</p>
          <HiDownload />
        </div>
        <div className='projects-prototype-image-container'>
          <p className='projects-prototype-image-text'>Product description document</p>
          <HiDownload />
        </div>
      </div>
    </div>,
    <div className='projects-sourcing-container'>
      <div className='projects-sourcing-manufacturer-container'>
        {manufaturers.map((e,i) => {
          return <div className='projects-sourcing-manufacturer-name-container'>
              <p className='projects-sourcing-manufacturer-name'
                key={i}
                onClick={() => setSelectedManufacturer(i-1)}
              >{e.name}</p>
              <hr className={`projects-sourcing-manufacturer-name-under ${selectedManufacturer === i-1 ? 'visible' : 'hidden'}`} />
            </div> 
        })}
      </div>
      <div className='projects-sourcing-subcontainer'>
        {manufaturers.map((e,i) => {
          return <div className={`projects-sourcing-visi ${selectedManufacturer === i-1 ? 'visible' : 'hidden'}`}>
            <div className='projects-sourcing-subcontainer-detail'>
              <div className='projects-sourcing-title-container'>
                <PiListChecksBold />
                <h4 className='projects-sourcing-item-title'>Product detail</h4>
              </div>
              <div className='dashboard-project-content-container'>
                <DashboardProjectItem name='Description' content={`${e.details.description}`} />
                <hr className='dashboard-project-item-vert' />
                <DashboardProjectItem name='Features' content={e.details.features} />
                <hr className='dashboard-project-item-vert' />
                <DashboardProjectItem name='Cost' content={e.details.cost} />
              </div>
            </div>
            <div className='projects-sourcing-subcontainer-images'>
              <div className='projects-sourcing-title-container'>
                <PiListChecksBold />
                <h4 className='projects-sourcing-item-title'>Product images</h4>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>,
    <></>,
    <></>,
    <></>,
  ]
  
  return (
    <div className={`project-item ${project.id === activeProject.id ? 'visible' : 'hidden'}`}>
      {project.options.map((e, i) =>{
        return <ProjectItem
                  options={e}
                  key={i}
                >{projectItems[i]}</ProjectItem>
      })}
    </div>
  )
}

export default Project;