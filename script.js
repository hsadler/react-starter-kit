
// Example 1
React.render(<img src='http://qnimate.com/wp-content/uploads/2014/03/images2.jpg' />, document.getElementById('foto1'));


// Example 2
var Photo2 = React.createClass({

  render: function() {
    return (
      <div className='photo'>
        <img src={this.props.imageURL} />
        <span>{this.props.caption}</span>
      </div>
    );
  }
});

React.render(<Photo2 imageURL='http://tinyurl.com/lkevsb9' caption='Hong Kong!' />, document.getElementById('foto2'));


// Example 3
var Photo3 = React.createClass({

  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    };
  },

  render: function() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }
});

React.render(<Photo3 src='http://www.codiguiel.net/cache/dropplets.jpg' caption='Fuckin Water Drops!'/>, document.getElementById('foto3'));



// Example 4
var Photo4 = React.createClass({

  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    };
  },

  render: function() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
            ♥
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    );
  }
});

var PhotoGallery = React.createClass({

  render: function() {

    var photos = this.props.photos.map(function(photo) {
      return <Photo4 src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    );
  }
});

var data = [
  {
    url: 'http://tinyurl.com/lkevsb9',
    caption: 'Hong Kong!'
  },
  {
    url: 'http://tinyurl.com/mxkwh56',
    caption: 'Cows'
  },
  {
    url: 'http://tinyurl.com/nc7jv28',
    caption: 'Scooters'
  }
];

React.render(<PhotoGallery photos={data} />, document.getElementById('foto4'));



