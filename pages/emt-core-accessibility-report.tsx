import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {emtCoreLogo, metasHomepage} from '../assets/images';

function ScheduleAppointmentForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const your_website = formData.get('your_website') as string;

    alert(
      `Form Submitted!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${your_website}`,
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-fit rounded-[10px] bg-white px-6 py-10 dark:text-gray-900"
    >
      <p className="text-center text-4md font-bold">
        Schedule Your Appointment
      </p>
      <p className="text-center">We here to help you 24/7 with experts</p>
      <div className="mt-6 flex flex-col gap-4">
        <label htmlFor="name" id="name">
          <input
            type="text"
            placeholder="Your Name"
            aria-label="Your name"
            name="name"
            className="h-12 w-full rounded-sm bg-[#F6F7F9] px-6 dark:text-grey"
            data-emt-core
            required
          />
        </label>
        <label htmlFor="email" id="email">
          <input
            type="email"
            placeholder="E-mail"
            aria-label="E-mail"
            name="email"
            className="h-12 w-full rounded-sm bg-[#F6F7F9] px-6 dark:text-grey"
            data-emt-core
            required
          />
        </label>
        <label htmlFor="phone" id="phone">
          <input
            type="tel"
            placeholder="Phone"
            aria-label="Phone"
            name="phone"
            className="h-12 w-full rounded-sm bg-[#F6F7F9] px-6 dark:text-grey"
            data-emt-core
            required
          />
        </label>
        <label htmlFor="your_website" id="your_website">
          <input
            type="url"
            placeholder="Your website"
            aria-label="Your website"
            name="your_website"
            className="h-12 w-full rounded-sm bg-[#F6F7F9] px-6 dark:text-grey"
            data-emt-core
            required
          />
        </label>
        <button className="h-12 rounded bg-info text-white transition-all duration-300 hover:bg-brown">
          Submit now
        </button>
      </div>
    </form>
  );
}

const EmtCoreAccessibilityReport: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EMT Core Accessibility Report</title>
        <meta
          name="title"
          property="og:title"
          content="EMT Core Accessibility Report"
        />
        <meta name="description" content="EMT Core Accessibility Report" />
        <link rel="icon" href="https://res.cloudinary.com/dspbvhlt6/image/upload/v1696540318/website-images/favicon_fjsnqx.png" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dayoawobeku.com/emt-core-report"
        />
        <meta property="og:title" content="EMT Core Accessibility Report" />
        <meta
          name="description"
          property="og:description"
          content="EMT Core Accessibility Report"
        />
        <meta property="og:site_name" content="Dayo Awobeku" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1690995694/emt-core-accessibility-report_ypnuvg.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dayoawobeku.com/emt-core-report"
        />
        <meta property="twitter:site" content="@dayoawobeku" />
        <meta property="twitter:title" content="Dayo Awobeku" />
        <meta
          property="twitter:description"
          content="EMT Core Accessibility Report"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dspbvhlt6/image/upload/v1690995694/emt-core-accessibility-report_ypnuvg.png"
        />
      </Head>
      <main className="mx-auto mt-10 flex max-w-[691px] flex-col items-start gap-10 dark:text-white">
        <div className="flex items-center gap-4">
          <h1 className="text-2lg font-medium">
            EMT Core Accessibility Report
          </h1>
          <a
            href="https://etmcore.com/"
            target="_blank"
            rel="noreferrer"
            className="h-[41px]"
          >
            <Image
              src={emtCoreLogo}
              alt="EMT Core logo"
              width={73}
              height={41}
            />
          </a>
        </div>
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">
            Improving Website Accessibility
          </h2>
          <p>
            Hello!
            <br />
            <span className="block h-2"></span>
            My name is Dayo Awobeku, and I am a frontend developer passionate
            about creating accessible and user-friendly web experiences. As part
            of my commitment to web accessibility, I conducted a comprehensive
            assessment of{' '}
            <a
              href="https://etmcore.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-grey hover:underline dark:text-white-800"
            >
              this website's
            </a>{' '}
            accessibility.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">Purpose of the Report</h2>
          <p>
            The purpose of this report is to help enhance your website's
            accessibility and improve its overall user experience. I have
            identified specific areas where accessibility improvements can be
            made, ensuring that all users can navigate and engage with your site
            seamlessly.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">Why Accessibility Matters</h2>
          <p>
            Web accessibility is essential to ensure that people with
            disabilities can access and use digital content. By making your
            website more accessible, you create a more inclusive online space
            and reach a broader audience.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">How to Use This Report</h2>
          <p>
            In this report, you will find an overview of some of the
            accessibility issues I've identified on your website. Each section
            includes a brief description of the problem and actionable
            recommendations on how to address it.
          </p>
        </section>
      </main>
      <div className="my-16 h-[1px] w-full bg-white-400" />
      <div className="flex max-w-[789px] flex-col gap-16 dark:text-white">
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">
            Lack of "Skip to Content" Control for Numerous Navigation Links
          </h2>
          <p>
            <span className="font-bold">Problem:</span> The website poses
            challenges for users with screen readers or those navigating through
            keyboard-only interactions. With an abundance of navigation links,
            users may encounter difficulty in bypassing repetitive elements and
            quickly accessing the main content. The absence of a "Skip to
            Content" control hinders efficiency, causing users to navigate
            through the entire navigation menu repeatedly before reaching the
            desired content.
          </p>
          <p>
            <span className="font-bold">Recommendations:</span> Introducing a
            "Skip to Content" control would empower users to jump directly to
            the main content, bypassing navigation links and reducing the
            cognitive load associated with redundant interactions. Enhancing
            keyboard accessibility in this manner ensures a smoother and more
            enjoyable experience for all users, especially those with
            disabilities relying on assistive technologies to access website
            content.
          </p>
          <figure className="w-full">
            <Image
              src={metasHomepage}
              alt="Meta’s homepage showing the Skip to content control"
            />
            <figcaption className="text-center">
              Meta’s homepage showing the Skip to content control
            </figcaption>
          </figure>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">
            Navigating with Keyboard: Tabbing Challenges
          </h2>
          <p>
            <span className="font-bold">Problem:</span> Navigating the website
            using the keyboard's "Tab" key reveals challenges in the tab order
            and focus management. Users relying on keyboard-only navigation may
            encounter difficulties in accessing interactive elements or may find
            the tab flow inconsistent with the visual layout. Ensuring smooth
            and logical keyboard tabbing enhances accessibility and facilitates
            a seamless experience for all users, including those with motor
            disabilities or who prefer keyboard-based interactions.
          </p>
          <p>
            As an illustration, in the GIF below, I attempted to use the Tab
            key, but there were no visual indicators or cues to indicate my
            current location, leaving me uncertain about my position on the
            page.
          </p>
          <div className="relative w-full">
            <video
              src="/emt-core-gif.mp4"
              loop
              preload="true"
              playsInline
              muted
              autoPlay
            />
          </div>
          <p className="font-bold">Recommendations:</p>
          <ol className="list-inside list-decimal space-y-3 pl-2">
            <li>
              <span className="font-medium">Logical Tab Order:</span> Ensure a
              logical and intuitive tab order for all interactive elements,
              focusing on maintaining a natural reading sequence. Prioritize
              essential navigation elements, forms, and interactive content to
              provide a smooth browsing experience.
            </li>
            <li>
              <span className="font-medium">Visible Focus Indicator:</span>{' '}
              Implement a visible focus indicator on interactive elements to
              improve clarity and help users understand their current location
              while tabbing through the site.
            </li>
            <li>
              <span className="font-medium">ARIA Roles and Attributes:</span>{' '}
              Consider implementing ARIA (Accessible Rich Internet Applications)
              roles and attributes to enhance the accessibility of complex or
              custom interactive elements.
            </li>
          </ol>
          <p>
            For example, here’s how I would build the Schedule Appointment Form,
            ensuring it follows HTML5 semantics and incorporates essential
            accessibility features. Feel free to click within the form to move
            the focus there and hit the Tab key.
          </p>
          <ScheduleAppointmentForm />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-4md font-medium">
            Inaccessible Language Change Dialog and Ambiguous Close Icon
          </h2>
          <p>
            <span className="font-bold">Problem:</span> The language change
            feature on the website exhibits several accessibility issues that
            hinder a seamless user experience. Upon clicking the "English"
            button with the UK flag, users encounter a dialog opening from the
            right without a clear focus indicator. This lack of visual cues
            creates confusion during keyboard navigation for users with
            disabilities, especially those with visual impairments or cognitive
            challenges.
            <br />
            <span className="mt-2 block"></span>
            Additionally, the presence of an ambiguous "close" icon made of dots
            may not clearly indicate how to exit the dialog, further
            complicating the user's interaction.
          </p>
          <p className="font-bold">Recommendations:</p>
          <ol className="list-inside list-decimal space-y-3 pl-2">
            <li>
              <span className="font-medium">Accessible dialog:</span> Implement
              a properly styled and accessible dialog for the language change
              feature. Ensure that it uses semantic HTML tags and the necessary
              ARIA roles and attributes to provide context and functionality to
              screen readers.
            </li>
            <li>
              <span className="font-medium">Clear Close Icon:</span> Replace the
              dots with a recognizable and universally understood "close" icon
              (e.g., an "X" symbol) to indicate the dialog's exit point clearly.
            </li>
            <li>
              <span className="font-medium">Keyboard Close Functionality:</span>{' '}
              Enable keyboard users to close the language change dialog easily.
              Implement keyboard focus management to ensure users can navigate
              between interactive elements within the dialog and close it using
              the "Enter" or "Escape" keys.
            </li>
          </ol>
        </section>
      </div>
      <div className="my-16 h-[1px] w-full bg-white-400" />
      <section className="flex max-w-[789px] flex-col gap-4 dark:text-white">
        <h2 className="text-4md font-medium">Conclusion</h2>
        <p>
          In conclusion, this accessibility report has shed light on several key
          areas for improvement on the website. Addressing the lack of a "Skip
          to Content" control, resolving tabbing challenges, and enhancing the
          language change dialog amongst others, are essential steps towards
          creating a more inclusive and user-friendly online experience.
          <br />
          <span className="mt-3 block"></span>
          Web accessibility is not only a legal requirement but also a
          fundamental aspect of ensuring that all users, regardless of their
          abilities, can access and engage with digital content seamlessly. By
          investing in accessibility, EMT Core has the opportunity to create a
          website that truly embraces diversity and empowers all users to
          navigate and interact effortlessly.
          <br />
          <span className="mt-3 block"></span>
          I am genuinely passionate about web accessibility and firmly believe
          that with collaboration and dedication, we can transform EMT Core's
          website into a beacon of inclusivity and innovation. I am eager to
          contribute my skills and expertise to assist in implementing the
          recommended improvements.
          <br />
          <span className="mt-3 block"></span>
          If you have any questions or require further assistance, please don't
          hesitate to reach out to me at{' '}
          <a
            href="mailto: dayoawobeku@gmail.com"
            className="font-medium text-grey hover:underline dark:text-white-800"
          >
            dayoawobeku@gmail.com
          </a>
          . I'm excited about the potential to work together and make a positive
          impact on the web's accessibility landscape.
          <br />
          <span className="mt-3 block"></span>
          Thank you for considering this report, and I look forward to the
          possibility of collaborating with EMT Core to create a more accessible
          and user-friendly digital platform.
          <br />
          <span className="mt-3 block"></span>
          Sincerely,
          <br />
          <span className="mt-3 block"></span>
          Dayo Awobeku.
          <br />
          <span className="mt-3 block"></span>
          <a
            href="mailto: dayoawobeku@gmail.com"
            className="font-medium text-grey hover:underline dark:text-white-800"
          >
            Email
          </a>{' '}
          <a
            href="https://twitter.com/dayoawobeku"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-grey hover:underline dark:text-white-800"
          >
            Twitter
          </a>{' '}
          <a
            href="https://linkedin.com/in/dayoawobeku"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-grey hover:underline dark:text-white-800"
          >
            LinkedIn
          </a>{' '}
        </p>
      </section>
    </div>
  );
};

export default EmtCoreAccessibilityReport;
