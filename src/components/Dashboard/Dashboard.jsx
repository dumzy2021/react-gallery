import { useEffect, useState } from "react";
import { toLower } from "lodash";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { filterTypes, photoTransform } from "./helpers/data";
import { Button, Dropdown, Modal } from "flowbite-react";
import { GALLERY_DB_NAME, ERROR, SUCCESS, toastHandler } from "../../utils";
import { db } from "../../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { ImageSkeleton } from "../common";
import { useAuth } from "../../contexts";
export const DashboardContents = () => {
  const [index, setIndex] = useState(-1);
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(filterTypes[0].key);
  const [gallery, setGallery] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const q = query(
        collection(db, GALLERY_DB_NAME),
        orderBy("timestamp", type),
        limit(10)
      );

      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const transformGallery = photoTransform(newData);

      setGallery(transformGallery);
    } catch (error) {
      toastHandler({
        message: error.message,
        type: toLower(ERROR),
      });
    } finally {
      setLoading(false);
    }
  };
  const openModal = (id) => {
    setShowModal(true);
    setSelectedPhotoIndex(id);
  };
  const confirmDelete = async () => {
    try {
      const docRef = doc(db, GALLERY_DB_NAME, selectedPhotoIndex);
      await deleteDoc(docRef);
      setGallery(gallery.filter((photo) => photo.id !== selectedPhotoIndex));
      toastHandler({
        message: `Photo Deleted Successfully`,
        type: toLower(SUCCESS),
      });
    } catch (error) {
      toastHandler({
        message: ` ${error.message}`,
        type: toLower(ERROR),
      });
    }
    setShowModal(false);
  };
  useEffect(() => {
    fetchPosts();
  }, [type]);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-6 items-center justify-between">
        <h3 className="text-[#101828] font-semibold text-xl md:text-3xl mb-4">
          {currentUser?.username ? (
            <>Welcome {currentUser?.username}</>
          ) : (
            <>My Gallery</>
          )}
        </h3>
        {!loading && gallery.length > 0 && (
          <Dropdown label={"Filter By"}>
            {filterTypes.map((data, index) => (
              <Dropdown.Item
                key={index}
                as="span"
                onClick={() => setType(data.key)}
              >
                {data.title}
              </Dropdown.Item>
            ))}
          </Dropdown>
        )}
      </div>

      {loading && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <ImageSkeleton length={10} />
        </div>
      )}

      {!loading && gallery && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {gallery.map((photo, index) => (
            <div key={index} className="relative group h-80 w-full">
              <img
                className="h-full object-cover max-w-full w-full  rounded-lg cursor-pointer mb-4"
                src={photo.src}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {photo.caption}
                </h3>
                <p className="text-white text-sm mb-4">{photo.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => setIndex(index)}>Preview</Button>

                  <Button color="failure" onClick={() => openModal(photo.id)}>
                    Delete
                  </Button>
                </div>

                {photo.uploadedBy && (
                  <p className="absolute bottom-2 left-2 text-white text-xs">
                    Uploaded by: {photo.uploadedBy}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && gallery.length == 0 && (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-purple-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              No Gallery Found
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Follow the link below to create your Gallery.
          </p>
          <Link
            to="/create-gallery"
            className="inline-flex items-center px-3 py-2 text-sm font-medium my-8 text-center text-white  bg-[#00468B] hover:!bg-[#00468B] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Gallery
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      )}

      <Modal show={showModal} onClose={() => setShowModal(false)} size="sm">
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this photo?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button color="failure" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        slides={gallery}
      />
    </>
  );
};
