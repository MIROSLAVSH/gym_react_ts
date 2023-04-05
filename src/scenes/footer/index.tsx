import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = () => {
  return (
	 <footer className="bg-primary-100 py-16">
		<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
			<div className="mt-16 basis-1/2 md:mt-0">
				<img src={Logo} alt="logo" />
				<p className="my-5">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eos minus asperiores? Voluptas doloribus eum assumenda dolor tempora doloremque nisi impedit accusantium quasi corporis itaque, veritatis in necessitatibus, natus sequi!
				</p>

			</div>
			<div className="mt-16 basis-1/4 md:mt-0">
				<h4 className="font-bold">Links</h4>
				<p className="my-5">Lorem, ipsum dolor.</p>
				<p className="my-5">Lorem ipsum dolor sit amet.</p>
				<p>Lorem ipsum dolor sit.</p>
			</div>
			<div className="mt-16 basis-1/4 md:mt-0">
				<h4 className="font-bold">Contact Us</h4>
				<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				<p>(303)475-5687</p>
			</div>
		</div>
	</footer>
  )
}

export default Footer