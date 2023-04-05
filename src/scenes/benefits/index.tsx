import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt blanditiis quibusdam nulla dicta, recusandae aut! At rem illum quasi."
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt  quibusdam nulla dicta, recusandae aut! At rem illum quasi."
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description:"dolor sit amet consectetur adipisicing elit. Beatae incidunt blanditiis quibusdam nulla dicta, recusandae aut! At rem illum quasi."
	},
]


const container = {
	hidden: {},
	visible: {
		transition: { straggerChild: 0.2 }
	},
}


type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {
  return (
	 <section
	 	id="benefits"
		className="mx-auto min-h-full w-5/6 py-20"
	 >
		<motion.div
			onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
		>
			{/* header */}
			<motion.div 
				className="md:my-5 md:w-3/5"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5}}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x:-50 },
					visible: { opacity: 1, x: 0},
				}}
			>
				<HText>MORE THAN JUST A GUM.</HText>
				<p className="my-5 text-sm">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis id earum totam? Perferendis soluta odit aut necessitatibus debitis unde! Consectetur nisi enim ullam, quis itaque possimus iste non recusandae minima.
				</p>
			</motion.div>

			{/* benefits */}
			<motion.div 
			className="md:flex items-center justify-between gap-8 mt-5"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			variants={container}
			>
				{benefits.map((benefit: BenefitType) => (
					<Benefit 
						key={benefit.title}
						icon={benefit.icon}
						title={benefit.title}
						description={benefit.description}
						setSelectedPage={setSelectedPage}
					/>
				))}
			</motion.div>
			
			{/* graphics and description */}
			<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

				{/* graphic */}
				<img 
					className="mx-auto"
					src={BenefitsPageGraphic} 
					alt="benefits-page-graphic" 
				/>

				{/* description */}
				<div>
					{/* title */}
					<div className="relative">
						<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5}}
								transition={{ duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: 50 },
									visible: { opacity: 1, x: 0},
								}}
							>
								<HText>
									MILLIONS OF HAPPY MEMBERS GETTING{" "}
									<span className="text-primary-500">FIT</span>.
								</HText>
							</motion.div>
						</div>
					</div>

					{/* descript */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5}}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: 50 },
							visible: { opacity: 1, x: 0},
						}}
					>
						<p className="my-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident sint ut animi quisquam. Vero quod sunt natus. Iure aut nisi rerum, consectetur minus molestias asperiores dolore! Accusamus ratione aliquid excepturi eveniet sapiente adipisci, nobis quis numquam autem obcaecati aperiam.
						</p>
						<p className="mb-5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam tempore nam culpa labore ullam omnis adipisci possimus deserunt quas nobis quia odio odit id soluta facere excepturi, accusamus rerum vitae.
						</p>
					</motion.div>

					{/* button */}
					<div className="relative mt-16">
						<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
							<ActionButton setSelectedPage={setSelectedPage}>
								Join Now
							</ActionButton>
						</div>
					</div>
				</div>
			</div>

		</motion.div>
	 </section>
  )
}

export default index