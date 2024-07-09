import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage({ events }) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="discription"
          content="Find an event that that allows you to evolve"
        />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
