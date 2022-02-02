import Emoji from "./Emoji";

export default function Greeting({ hours }: { hours: number }) {
  return (
    <h1 className="text-3xl sm:text-4xl font-medium text-gray-500 mr-4 my-2 mb-6">
      {hours >= 0 ? (
        hours >= 12 ? (
          hours >= 18 ? (
            <>
              Good Evening <Emoji symbol="0x1F31F" />
            </>
          ) : (
            <>
              Good Afternoon <Emoji symbol="0x1F324" />
            </>
          )
        ) : (
          <>
            Good Morning <Emoji symbol="0x1F305" />
          </>
        )
      ) : null}
    </h1>
  );
}
