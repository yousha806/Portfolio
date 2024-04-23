import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ExperienceEntry, EducationEntry, PublicationEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/avatar.jpg"
            alt="Yousha Mahamuni"
            className="rounded-full h-64 w-64 object-cover mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/in/yousha-mahamuni/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/yousha806" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
            <Link href="https://twitter.com/YoushaMahamuni" className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Twitter">
              <icons.RiTwitterFill size={32}></icons.RiTwitterFill>
            </Link>
            <Link href="https://scholar.google.com/citations?user=SlVRzNcAAAAJ&hl=en" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='Google Scholar'>
              <i className="ai ai-google-scholar ai-size-32"></i>
            </Link>
            <Link href="https://drive.google.com/file/d/11HhZuUzQ_3glcgw8XlZSPgTwatNdKlZC/view?usp=sharing" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#experience")} className='peer group-hover:underline'>Experience</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Publications</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Hi, I'm Yousha Mahamuni!</h1>

          <p className="mb-4">
            
          </p>
          <p className="mb-4">
          I'm deeply fascinated by the intersection of data engineering and machine learning, particularly in how they can be applied to real-world distributed systems and web applications.
          My interests span various areas, including Graph ML, Multi-Modal ML, computational social science, computer vision, and health informatics. 
          I've had the opportunity to contribute to this field through research papers and patents.  Driven by an entrepreneurial spirit, I am always eager to explore new opportunities and dive deep into the intricate details of emerging technologies that I leverage. Ultimately, my goal is to use data and machine learning to create solutions that positively impact society.
          </p>
          

          {/* Timeline */}
          <section>
            <div id="experience" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Experience</h1>
            <ExperienceEntry
              date={'Jan\u00a02022 - Dec\u00a02023'}
              title={'Engineer'}
              company={'PhysiFit'}
              description={<ul className="list-disc pl-6">
              <li>Led healthcare tech team, overseeing Computer Vision for remote physiotherapy/orthopedic monitoring</li>
              <li>Managed 100+ users on AWS with EC2, S3 and Cloudfront. Researched Pose Estimation, Mediapipe, Multimodal Healthcare Data Analytics, and smartwatch data.</li>
              <li>Implemented scalable CV code on ReactJS, Express, NodeJS, Flask, MongoDB. Successfully tested on Edge devices in India.</li>
              <li>Published Patent in Indian Patent Office Application No.202241040652 A</li>
            </ul>}
              tags={['MERN', 'Computer Vision', 'Pose Estimation']}
            />
            <ExperienceEntry
              date={'Nov\u00a02022 - Dec\u00a02023'}
              title={'Research Intern'}
              company={'Artificial Intelligence and Robotics Lab, Indian Institute of Science (IISc)'}
              description={<ul className="list-disc pl-6">
              <li>Collaborated with international researchers at AI and Robotics Lab, IISc.</li>
              <li>Led Spiking Neural Network (SNN) projects, specializing in Two-Stage Margin Maximization SNN (TMM SNN).</li>
              <li>Developed Evolving Prop SNN architecture with modified weight updation and alternative output layer using Python (NumPy, Pandas, SciPy, PyTorch).</li>
            </ul>}
              tags={['SNN', 'Python', 'PyTorch']}
            />
          
          </section>

          <section>
            <div id="education" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2019 - 2023'}
              university={'PES University'}
              degree={'Bachelors of Technology -Specialization: Machine Intelligence and Data Science'}
              tags={['Big Data', 'Network Analysis and Mining', 'Algos for Web and Info Retrieval']}
            />
          </section>

          <section>
            <div id="publications" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Publications</h1>
            <PublicationEntry
              date={'2023'}
              title={<a href="https://dl.acm.org/doi/abs/10.1145/3589572.3589588">Detection of Conversational Health in a Multimodal Conversation Graph by Measuring Emotional Concordance</a>}              
              journal={'2023 6th International Conference on Machine Vision and Applications (ICMVA 2023, Singapore)'}
            />
            <PublicationEntry
              date={'2022'}
              title={<a href="https://link.springer.com/chapter/10.1007/978-981-99-2602-2_18">An Interpretability Assisted Empirical Study of Affective Traits in Visual Content of Disinformation</a>}              
             
              journal={'Innovations in Computational Intelligence and Computer Vision ( ICICV 2022)'}

            />
            <PublicationEntry
              date={'2022'}
              title={"Mutual Consumer Behavioral Community Detection in Facebooks Large Page-Page Dataset using Graph/SubGraph Analysis"}              
             
              journal={'International Conference on Computational Intelligence for Information, Security and Communication Applications 2023'}

            />
          </section>

          <section id="contact">
            <div id="contact" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in collaborating, please feel free to reach out ! You can contact me at the following email adress: 
            </p>    
            <p>
              yousha [dot] mahamuni1 @ gmail [dot] com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage