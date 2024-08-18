import { GridPhotos } from "~/components/shared/grid-photos";
import { JoinCard } from "~/components/shared/join-card";
import { communityPlatforms } from "~/data/community-platforms";
import { heroPhotos } from "~/data/hero-photos";
import { cn } from "~/utils/cn";

const joinCommunityPhotos = Array.from({ length: 12 }).map((_, index) => ({
  slug: `hero-photo-${index}`,
  text: `Photo ${index}`,
  url: "https://picsum.photos/seed/picsum/200/200",
}));

const cssContainer = "flex gap-4 xs:flex-col lg:flex-row xs:mx-1 lg:-mx-12";

export function JoinCommunity({ isImageSlide }: { isImageSlide?: boolean }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="xs:text-xl lg:text-6xl font-semibold xs:mb-5 lg:mb-10 xs:mt-16 lg:mt-32">
          Bergabung ke ReactJS Indonesia
        </h3>

        <p className="max-w-4xl xs:text-base lg:text-2xl text-brand-gray-lavender font-medium xs:mb-10 lg:mb-20">
          Jadilah bagian dari komunitas developer React dan React Native
          terbesar di Indonesia di ujung jarimu. Temukan kami di platform social
          media favoritmu!
        </p>
      </div>

      {isImageSlide ? (
        <div className="w-full overflow-x-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="flex justify-between xs:gap-2 lg:gap-8 -mx-20">
            {heroPhotos.map((photo, index) => (
              <li
                key={photo.slug}
                className={`h-auto py-3 ${
                  index % 2 === 0 ? "-rotate-3" : "rotate-3"
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.text}
                  width={400}
                  height={270}
                  className="bg-slate-700 rounded-3xl"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full overflow-x-hidden px-4">
          <div className={cssContainer}>
            <GridPhotos type="3x2" photos={joinCommunityPhotos.slice(0, 3)} />
            <GridPhotos type="2x2" photos={joinCommunityPhotos.slice(3, 6)} />
            <GridPhotos type="3x2" photos={joinCommunityPhotos.slice(6, 9)} />
            <GridPhotos type="2x2" photos={joinCommunityPhotos.slice(9, 12)} />
          </div>

          <div className="relative">
            <div className={cn(cssContainer, "mt-4")}>
              {joinCommunityPhotos.slice(0, 7).map((photo, index) => (
                <div
                  key={photo.text}
                  className={cn(
                    "aspect-square max-h-36",
                    index % 3 === 0 ? "basis-1/4" : "basis-1/2",
                  )}
                >
                  <img
                    src={photo.url}
                    alt={photo.text}
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto xs:pb-12 lg:pb-32 flex justify-center flex-col text-center font-medium text-brand-gray-lavender sm:text-base lg:text-2xl">
        <h4 className="my-11 mt-24">Bergabung dan ikuti kami</h4>

        <ul className="grid grid-cols-2 gap-5 xs:px-4 lg:px-24">
          {communityPlatforms.map((platform) => {
            const { url, icon, text } = platform;
            const iconSize = platform.icon.title == "X" ? 37 : 44;

            return (
              <li
                key={url}
                className="rounded-2xl bg-brand-black-mamba place-content-center xs:px-4 lg:px-5 xs:py-4 lg:py-6 border border-brand-black-granite"
              >
                <a href={url} target="_blank" rel="noreferrer">
                  <JoinCard icon={icon} text={text} iconSize={iconSize} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
