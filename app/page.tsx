
export default function Home() {
  return (
    <>
      <div>
        <nav>
          {/* <Navbar /> */}
        </nav>
        <main>
          {/* Heading */}
          <div>
            <h1>Welcome to the Job Search Platform for Developers</h1>
            {/* Date */}
            <h2>Date</h2>
          </div>
          {/* Latest Job Posts */}
          <div>
            <span>
              <h3>Latest Job Posts</h3>
              <button>See All</button>
            </span>
            <div>
              {/* Card One */}
              <div> Card One</div>
              {/* Card Two */}
              <div>Card Two</div>
              {/* Card Three */}
              <div>Card Three</div>
              {/* Card Four */}
              <div>Card Four</div>
            </div>
          </div>
          {/* Recomended For You */}
          <div>
            <span>
              <h3>Recomended For You</h3>
              <button>See All</button>
            </span>
            {/* Inline Job Cards */}
            <div>

            </div>
          </div>
          {/* Featured Compaines */}
          <div>
            <span>
              <h3>Featured Compaines</h3>
            </span>
            <div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}
