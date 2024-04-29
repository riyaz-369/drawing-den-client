const FAQ = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-600 text-center">
          Explore our Frequently Asked Questions to find helpful information and
          solutions.
        </p>
        <div className="space-y-4">
          <div className="collapse rounded-md collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>What types of art and crafts are featured on your website?</p>
            </div>
            <div className="collapse-content bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                We feature a wide range of art and crafts, including painting,
                drawing, sculpture, mixed media, and more. Our content covers
                various styles, techniques, and mediums to inspire artists and
                crafts of all levels.
              </p>
            </div>
          </div>
          <div className="collapse rounded-md collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>How can I submit my artwork to be featured on your website?</p>
            </div>
            <div className="collapse-content bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                We welcome submissions from artists and crafters who would like
                to showcase their work on our platform. Please visit our
                submission page for guidelines and instructions on how to submit
                your artwork for consideration.
              </p>
            </div>
          </div>
          <div className="collapse rounded-md collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                How can I stay updated on new content, workshops, and events?
              </p>
            </div>
            <div className="collapse-content bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                Stay connected with us by subscribing to our newsletter and
                following us on social media. We regularly share updates,
                inspiration, and announcements to keep you informed about all
                the exciting happenings on our website.
              </p>
            </div>
          </div>
          <div className="collapse rounded-md collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                Can I commission a custom artwork or craft project from one of
                your featured artists?
              </p>
            </div>
            <div className="collapse-content bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                Many of our featured artists and crafters offer commission
                services for custom artworks or craft projects. Please contact
                the artist directly to discuss your specific requirements,
                pricing, and timelines.
              </p>
            </div>
          </div>
          <div className="collapse rounded-md collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                Are there any opportunities for artists or crafters to
                collaborate with your website?
              </p>
            </div>
            <div className="collapse-content bg-violet-100 text-black peer-checked:bg-orange-100 peer-checked:text-black">
              <p>
                Yes, we welcome collaborations with artists, crafters, and
                creative professionals who share our passion for art and crafts.
                Please reach out to us with your collaboration ideas, and we all
                be happy to explore potential partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
