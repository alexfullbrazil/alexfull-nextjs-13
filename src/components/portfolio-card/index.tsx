import Modal from '@/components/modal';
import { YoutubeVideo } from '@/components/youtube-video';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PortfolioCardProps {
  id?: string;
  category?: string;
  title?: string;
  tools?: string;
  skills?: string;
  client?: string;
  kind?: string;
  link?: string;
  buttonText?: string;
  external?: boolean;
  modal?: boolean;
  cardImage?: string;
  width?: number;
  height?: number;
}

export function PortfolioCard({
  id,
  category,
  title,
  tools,
  skills,
  client,
  kind,
  link,
  buttonText,
  external,
  modal,
  cardImage,
  width,
  height,
}: PortfolioCardProps) {
  const [comtentModal, setContentModal] = useState<boolean>(false);

  const toggleModal = () => {
    setContentModal(!comtentModal);
  };

  return (
    <>
      {modal && (
        <>
          {comtentModal && (
            <Modal
              maxWidth={980}
              align="flex-start"
              closeButton
              onClick={toggleModal}
              flat
            >
              {kind === 'video' && (
                <video
                  autoPlay
                  loop
                  playsInline
                  disablePictureInPicture
                  preload="auto"
                  src={link}
                  style={{ width: '100%', margin: '0 auto' }}
                />
              )}

              {kind === 'youtube' && <YoutubeVideo url={link} />}

              {kind === 'image' && (
                <Image
                  src={link}
                  alt={title}
                  width={width}
                  height={height}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </Modal>
          )}
        </>
      )}
      <div className="portfolio-card-item">
        <Image
          className="portfolio-card-image"
          src={cardImage}
          alt={title}
          width={width}
          height={height}
          priority
          style={{ width: '100%', height: 'auto' }}
        />

        <div className="portfolio-card-content">
          <div className="portfolio-card-title">
            <h2>{title}</h2>
          </div>

          <div className="portfolio-card-type">
            <span>Category: </span>
            {category}
          </div>

          <div className="portfolio-card-client">
            <span>Client: </span>
            {client}
          </div>

          <div className="portfolio-card-skills">
            <span>Skills: </span>
            {skills}
          </div>

          <div className="portfolio-card-tools">
            <span>Tools: </span>
            {tools}
          </div>

          {kind === 'video' || kind === 'image' || kind === 'youtube' ? (
            <button className="porfolio-card-button" onClick={toggleModal}>
              {buttonText} {'->'}
            </button>
          ) : (
            <a
              href={link}
              className="porfolio-card-button"
              target={external ? '_blank' : ''}
            >
              {buttonText || 'See in action'} {'->'}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
