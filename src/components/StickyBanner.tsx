export const StickyBanner = (props: { children: React.ReactNode }) => (
  <div className="z-50 bg-primary p-4 text-center text-lg font-semibold text-primary-foreground [&_a:hover]:text-yellow-400 [&_a]:text-yellow-300">
    {props.children}
  </div>
);
