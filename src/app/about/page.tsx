import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-2xl rounded-lg transform transition-transform hover:scale-105">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                <Image
                  src="/about.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                Hello! I&apos;m Alyan, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I&apos;m here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Alyan&apos;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              From curious beginner to seasoned developer, here&apos;s how Alyan navigated the world of programming.
            </p>
          </div>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
  src="/images.jpg"
  alt="Alyan as a beginner"
  width={600} // Adjust width based on your design
  height={400} // Adjust height based on your design
  className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
/>

              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Alyan’s coding journey began in high school when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Alyan spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
  src="/2w.png"
  alt="Alyan learning new skills"
  width={600}
  height={400}
  className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
/>

              </div>
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  After mastering the basics, Alyan&apos;s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Alyan quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

           

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
  src="/help.jpg"
  alt="Alyan mentoring others"
  width={600}
  height={400}
  className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
/>

              </div>
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Today, Alyan is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Alyan, coding is more than just a profession—it&apos;s a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}