import React from "react";
import Axios from "axios";

// // Sections and Components
import GallerySingleHeader from "components/Headers/GallerySingleHeader";
import GalleryCarousel from "./gallery-sections/GalleryCarousel";
import GalleryImages from "./gallery-sections/GalleryImages";

class GallerySingle extends React.Component {
  state = {
    album: {}
  };

  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
    const { slug } = this.props.match.params;
    Axios.get(`https://api.dtutimes.live/v1/gallery/${slug}`).then(res => {
      this.setState({ album: res.data });
      //   console.log(this.state)
    });
    console.log(slug);
  }

  render() {
    console.log(this.state);
    const { album } = this.state;
    return (
      <>
        <GallerySingleHeader
          title={album.name}
          biliner={album.biliner}
          img={album.album_imgUrl}
        />
        {album.subs_info && album.subs_info.length > 0 && (
          <GalleryCarousel albums={album.subs_info} />
        )}
        {album.image_info && album.image_info.length > 0 && (
          <GalleryImages images={album.image_info} />
        )}
      </>
    );
  }
}

// class GallerySingle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       slug: "",
//       album: {}
//     };
//   }
//   componentWillMount = () => this.setState({slug: ""})

//   componentDidMount = () => {
//     let { slug } = this.props.match.params;
//     console.log(slug);
//     if (slug === undefined) slug = "";
//     Axios.get(`https://api.dtutimes.live/v1/gallery/${slug}`).then(res =>
//       this.setState({ slug: slug, album: res.data })
//     );
//   };

//   render() {
//     console.log(this.state);
//     const { album } = this.state;
//     return (
//       <>
//         {album.name && (
//           <>
//
//             <GalleryCarousel albums={album} />
//           </>
//         )}
//         {!album.name && (
//           <>
//             <GalleryHeader />
//             {album && <GalleryCarousel albums={album} />}
//           </>
//         )}
//       </>
//     );
//   }
// }

export default GallerySingle;
