// import MainNav from "../components/MainNav"

import { Link } from "react-router-dom";
import { Heading } from "../components/ui/Heading";


// EDE9E3
// C8B9A0

function Services() {
	return (
		<div>
			<section>
				<section></section>
				<header>
					<Heading> @touchedBYNoa</Heading>
					<Heading> Beauty Services</Heading>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id illum
						ipsa molestiae culpa fuga hic architecto dolore nobis quos ex
						ratione omnis perferendis iusto voluptate eaque, nulla doloremque
						officiis deleniti?
					</p>
					<Link>Book Appointment</Link>
				</header>
			</section>

			<section>
				<section>
					<Heading>women's cut</Heading>
				</section>

				<section>
					<Heading>hair styling</Heading>
				</section>

				<Link>Book Appointment</Link>
			</section>
			<section>
				<Heading>Hair & Beauty Gallery+</Heading>

				<section></section>
      </section>
      {/* FOOTER */}
      <section>
        <section>
          <Heading>Menu</Heading>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>gallery</li>
            <li>book</li>
          </ul>
        </section>
        <section>
          <Heading>Hours</Heading>
          <ul>
            <li>
              <span>Mon</span>
              <span>---</span>
              <span>10 - 4pm</span>
            </li>
            <li>
              <span>Tue-Wed</span>
              <span>---</span>
              <span>10 - 4pm</span>
            </li>
            <li>
              <span>Thur-Fri</span>
              <span>---</span>
              <span>10 - 4pm</span>
            </li>
            <li>
              <span>Sat</span>
              <span>---</span>
              <span>10 - 4pm</span>
            </li>
            <li>
              <span>Sun</span>
              <span>---</span>
              <span>Closed</span>
            </li>

          </ul>
          
        </section>
      </section>
		</div>
	);
}

export default Services;
