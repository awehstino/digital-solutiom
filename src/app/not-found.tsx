import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/Common/PageBanner";

export default function NotFound() {
  return (
    <>
      <PageBanner pageTitle="404 Error Page" />

      <div className="error-wrap pt-130 pb-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 ps-xl-0 text-center">
              <Image
                src="/images/error.png"
                alt="error"
                width={367}
                height={138}
                className="mx-auto d-block mb-40"
              />

              <h3 className="fs-24 fw-bold font-primary text-title mt-5 mb-40">
                Oops! We can’t find the page you’re looking for
              </h3>

              <Link
                href="/"
                className="btn style-three fw-semibold position-relative round-oval"
              >
                Back To Home
                <span className="position-absolute top-0 end-0 h-100 d-flex flex-column align-items-center justify-content-center">
                  <Image
                    src="/images/icons/right-arrow-white.svg"
                    alt="Icon"
                    width={18}
                    height={16}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
