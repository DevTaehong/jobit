import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { formatSalaryRange } from "@/lib/formatSalaryRage";
import { generateFakeFollowerCounts } from "@/lib/fakeFollowerCounts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const demoData = {
  employer_logo: "/images/companyPlaceholderLogo.png",
  job_title: "Web developer",
  employer_Name: "UIHUT",
  job_description:
    "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.",
  job_min_salary: 50000,
  job_max_salary: 70000,
  job_salary_period: "MONTH",
  job_required_skills: ["React", "Node.js", "JavaScript"],
  employer_company_type: "Finance",
  job_apply_link: "https://www.google.com",
  job_city: "Austin",
  job_state: "TX",
};

function CompanyDetails() {
  return (
    <main className="flex flex-col px-6 pt-[5.14rem]">
      <Card className="border-0 bg-transparent shadow-none">
        <div
          className="relative h-[8.21875rem] w-full rounded-t-[1.25rem] bg-[url('/images/companyCover.png')] 
            bg-cover bg-center"
        >
          {/* // TODO fallback for company logo */}
          <img
            className="absolute left-3 top-[6.47rem] h-14 w-14 rounded-[10px] 
              border-[3px] border-Natural3"
            src={demoData.employer_logo}
          />
        </div>
        <CardHeader className="pb-[1.19rem] pl-3 pt-[2.45875rem]">
          <CardTitle>{demoData.employer_Name}</CardTitle>
          <CardDescription className="mt-2 flex flex-row items-center gap-[0.38rem] text-sm font-medium not-italic text-Natural7">
            {demoData.employer_Name}
            {/* Oval image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3.5C2.32843 3.5 3 2.82843 3 2C3 1.17157 2.32843 0.5 1.5 0.5C0.671573 0.5 0 1.17157 0 2C0 2.82843 0.671573 3.5 1.5 3.5Z"
                fill="#696974"
              />
            </svg>
            {demoData.job_city}, {demoData.job_state}
          </CardDescription>
          <CardDescription className="mt-1 flex flex-row items-center gap-[0.38rem] text-sm font-medium not-italic text-Natural6">
            {demoData.employer_company_type}
            {/* Oval image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3.5C2.32843 3.5 3 2.82843 3 2C3 1.17157 2.32843 0.5 1.5 0.5C0.671573 0.5 0 1.17157 0 2C0 2.82843 0.671573 3.5 1.5 3.5Z"
                fill="#696974"
              />
            </svg>
            {`${generateFakeFollowerCounts(10000, 999999)} Followers`}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row -space-x-3 pl-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-[5rem] border-2 border-solid border-White"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              className="rounded-[5rem] border-2 border-solid border-White"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              className="rounded-[5rem] border-2 border-solid border-White"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              className="rounded-[5rem] border-2 border-solid border-White"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter className="pl-3">
          <Button
            variant="outline"
            className="w-full rounded-[0.625rem] border border-solid border-Primary text-Primary"
          >
            Follow
          </Button>
        </CardFooter>
      </Card>

      {/* Search Job title */}
      <div className="rounded-[0.625rem] bg-white px-4 py-5">
        <div className="relative">
          <span className="absolute left-[0.625rem] top-1/2 -mt-2.5">
            <Image
              className="flex"
              src="/iconography/outline-search.svg"
              alt="Search icon"
              width={18}
              height={18}
            />
          </span>
          <input
            className="h-11 w-full rounded-2xl border-0 bg-Natural3 px-[0.625rem] py-2 pl-[2.185rem] text-[0.8125rem] font-medium not-italic leading-[1.125rem] text-Natural6 focus:outline-none 
              focus:ring-1 focus:ring-Primary"
            type="text"
            placeholder="Search Job title or Keyword"
          />
          <Button className="absolute inset-y-0 right-[0.62rem] top-2 h-[1.75rem] w-[4.5rem] rounded-[0.625rem] rounded-r-lg bg-Primary px-[0.88rem] py-1 font-semibold text-White">
            Search
          </Button>
        </div>

        <div className="pb-2 pt-5 text-base font-bold text-Black">
          Recently Posted Job
        </div>
        <div className="grid grid-flow-row gap-2">
          <Card className="flex flex-col gap-5 rounded-[0.625rem] border-0 bg-white shadow-custom">
            {/* Company logo, job title, skills */}
            <CardHeader className="flex flex-row justify-between px-5 pb-0 pt-5">
              <div className="flex flex-row items-center gap-3">
                <div
                  className="h-12 w-12 shrink-0 rounded-[0.47rem] border-[0.14rem] border-Natural3 
                  bg-Natural3 p-[0.35rem]"
                >
                  <img
                    width={36}
                    height={36}
                    src="/images/Company-logo.png"
                    alt="Company logo"
                  />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-base font-semibold not-italic text-Black">
                    {demoData.job_title}
                  </CardTitle>
                  {/* Skills */}
                  <div className="flex flex-row flex-wrap gap-[0.31rem]">
                    <CardDescription className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem]">
                      {demoData.job_required_skills[0]}
                    </CardDescription>
                    <CardDescription className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem]">
                      {demoData.job_required_skills[1]}
                    </CardDescription>
                    <CardDescription className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem]">
                      {demoData.job_required_skills[2]}
                    </CardDescription>
                  </div>
                </div>
              </div>
              {/* ic-More button */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Image
                      src="/iconography/ic_More.svg"
                      alt="More button"
                      width={16}
                      height={16}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.04765 0.872986H14.7857C16.539 0.872986 17.9603 2.2943 17.9603 4.04759V16.8432C17.9603 17.7199 17.2497 18.4305 16.373 18.4305C16.0126 18.4305 15.6629 18.3078 15.3814 18.0826L10.9167 14.5104L6.45201 18.0826C5.7675 18.6303 4.76862 18.5194 4.22094 17.8349C3.99574 17.5534 3.87305 17.2037 3.87305 16.8432V4.04759C3.87305 2.2943 5.29437 0.872986 7.04765 0.872986ZM7.04765 2.46029C6.17101 2.46029 5.46035 3.17095 5.46035 4.04759V16.8432L9.92504 13.271C10.5048 12.8072 11.3286 12.8072 11.9084 13.271L16.373 16.8432V4.04759C16.373 3.17095 15.6624 2.46029 14.7857 2.46029H7.04765Z"
                          fill="#92929D"
                        />
                      </svg>
                      <span className="ml-1">Save Job</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-0">
              <p className="line-clamp-4 h-[5.3125rem]  text-[0.875rem] font-normal not-italic leading-[1.375rem] text-Natural7">
                {demoData.job_description}
              </p>
            </CardContent>
            <CardFooter className="flex flex-row justify-between px-5 pb-5">
              <p>
                {demoData.job_max_salary || demoData.job_max_salary ? (
                  formatSalaryRange(
                    demoData.job_min_salary,
                    demoData.job_max_salary,
                    demoData.job_salary_period,
                  )
                ) : (
                  <span className="text-sm font-medium not-italic text-Natural7">
                    -
                  </span>
                )}
              </p>
              <Button className="rounded-[0.625rem] bg-[#0bab7c1a] px-[0.88rem] text-[0.8125rem] font-semibold not-italic leading-5 text-Primary">
                <a target="_blank" href={demoData.job_apply_link}>
                  Apply now
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mb-10 mt-14 flex items-center justify-center">
          <Button
            className="rounded-[0.625rem] border border-solid border-Natural5 px-[0.875rem] py-2"
            variant="outline"
          >
            <span className="text-[0.9375rem] font-semibold leading-6 text-Natural6">
              See All Jobs
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default CompanyDetails;
