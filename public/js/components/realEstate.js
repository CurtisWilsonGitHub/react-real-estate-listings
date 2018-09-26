webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListsings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listings.";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          // this is the box view
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        'Posted on 05/8/2018'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'far fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        } else {
          // This is the long view
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        'Posted on 05/8/2018'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'far fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price '
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Highest Price '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-th-list', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'section',
            { id: 'pagination' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 3,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '759 Null Dr',
  city: 'Aurora',
  state: 'CO',
  rooms: 32,
  price: 520000,
  floorSpace: 2700,
  extras: ['elevator', 'gym'],
  homeType: 'Studio',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '89456 Blah Ave',
  city: 'City',
  state: 'KA',
  rooms: 10,
  price: 220000,
  floorSpace: 5000,
  extras: ['elevator', 'Swimming Pool', 'gym'],
  homeType: 'Ranch',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 2,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Home',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 2,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Town House',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 4,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Condo',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 4,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 1,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Studio',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 1,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Home',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 2,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Townhouse',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 3,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Studio',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 4,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Ranch',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 5,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Ranch',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 2,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Townhouse',
  image: 'https://images4.roofandfloor.com/listing_c1c159dd1c36755f7967670f03b87a45/1024x600/imperial-villas-apartments-in-kuniyamuthur-elevation-photo-1cti.jpg'

}, {
  address: '123 Fun Dr',
  city: 'Denver',
  state: 'CO',
  rooms: 5,
  price: 220000,
  floorSpace: 2500,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://images1.apartments.com/i2/82dEJudNsIFSeTMF0bKXTZxMtxrtQqjM1qSfKGprNuU/116/grand-reserve-katy-tx-aura-grand.jpg'

}];

exports.default = listingsData;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(98);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(100);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(101);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elavator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''

    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this2.filteredData();
        console.log(_this2.state);
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      // City
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      // Home type
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort(function (a, b) {
        return a - b;
      });

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state,
            populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, globalState: this.state,
            change: this.change, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              ' All '
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'homeType' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              ' All Homes '
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'bedrooms' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            this.bedrooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'elavator', value: 'elavator', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming-pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { name: 'finished_basement', value: 'finished-basement', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' logo '
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            ' create ads '
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            ' about us '
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            ' log in '
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[103]);