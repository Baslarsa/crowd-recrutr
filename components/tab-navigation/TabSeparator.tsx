const TabSeparator = () => {
  return (
    <div
      className="absolute top-0 right-0 hidden h-full w-5 md:block"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full text-gray-300"
        viewBox="0 0 22 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 -2L20 40L0 82"
          vectorEffect="non-scaling-stroke"
          stroke="currentcolor"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default TabSeparator;
