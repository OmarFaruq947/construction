import { Icon } from "@iconify/react";
import React from "react";
import { useParams } from "react-router-dom";
import blogImage from "../../assets/blogpic/pic2.jpg";

const ServiceMoreDetails = () => {
  const { id } = useParams();

  return (
    <>
      <p>{id}</p>
      <div className="max-w-screen-lg mx-auto border border-gray-100 mb-20">
          <div className=" px-6 py-6 space-y-3">
            {/* blog image`` */}
            <div>
              <img src={blogImage} alt="" className="w-full h-80" />
            </div>
            {/* Some minor details about blog`` */}
            <div className="flex md:space-x-4 w-full">
            
              <div className="hidden md:block">
                <p className="flex items-center justify-between">
                  <Icon className="text-brand md:mr-2" icon="ph:factory" />
                  Factory
                </p>
              </div>
              <div>
                <p className="flex items-center justify-between ">
                  <Icon
                    className="text-brand md:mr-2"
                    icon="ic:baseline-person"
                  />
                  posted by admin
                </p>
              </div>
              <div>
                <p className="flex items-center justify-between ">
                  <Icon
                    className="text-brand mr-2"
                    icon="simple-line-icons:calender"
                  />
                  December 11, 2022
                </p>
              </div>
            </div>
            {/* blog full details`` */}
            <div>
              <h1 className="text-4xl text-secondary font-semibold">
                Blog Title Here
              </h1>
            </div>
            <hr />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                tempora molestiae error harum quas repellat hic illum eaque
                recusandae, nesciunt rerum obcaecati enim atque quibusdam
                laudantium minima eos perspiciatis dignissimos! Impedit
                accusamus ab unde sequi facere odit similique illum provident
                quaerat dolores, error, placeat esse voluptatem sint, tenetur
                officiis reiciendis aut voluptates fuga sunt atque praesentium.
                Dolorum eligendi sit nulla voluptatum dolor veritatis totam.
                Voluptas, corrupti odit officiis soluta nisi repudiandae dolores
                atque molestias in eaque impedit animi a placeat ex suscipit.
                Sapiente autem quaerat vero, nesciunt molestias veniam amet
                itaque voluptas eum. Assumenda laborum, distinctio commodi
                voluptatibus fugiat nostrum eligendi nemo, non eaque corrupti
                ipsum fuga quam ab accusantium a eum, sunt modi saepe explicabo
                facere. Libero hic ratione corrupti vitae reprehenderit, error
                aut vero sunt pariatur optio commodi nulla cumque itaque
                quaerat, facilis quae deserunt reiciendis molestias rem quis?
                Omnis voluptatum qui natus eaque sequi, ratione in alias
                assumenda incidunt aperiam, temporibus esse doloribus laborum
                quis officiis optio nulla, modi vitae! Dolores excepturi
                temporibus alias, dignissimos culpa asperiores maiores porro
                accusamus a in soluta cupiditate sequi necessitatibus quos
                ratione voluptas quia? Exercitationem unde esse, quod incidunt
                dolore ex. Velit, rem? Asperiores architecto ex voluptatem
                quibusdam perferendis libero maiores?
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <Icon icon="mdi:tag-outline" className="text-brand mr-2" />
                Factory
              </p>
            </div>
            <hr />
          </div>
       
      </div>
    </>
  );
};

export default ServiceMoreDetails;
