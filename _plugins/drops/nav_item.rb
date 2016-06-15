module Drops
  class NavItem < Liquid::Drop
    extend Forwardable

    def_delegator :@page, :data
    def_delegator :@page, :url

    # --
    # Initialize a new instance.
    # --
    def initialize(page, payload)
      @payload = payload
      @page = page
    end

    # --
    # The page title.
    # --
    def title
      @page.data.title
    end

    # --
    # The Sub-Pages.
    # --
    def pages
      return @payload["nav"] if url == "/"
      comp_ary = split(url)

      @page.site.pages.each_with_object([]) do |page, out|
        if page.url != "/" && (url_ary = split(page.url)) != comp_ary && \
            url_ary[0..-2] == comp_ary

          out << self.class.new(page, @payload)
        end
      end
    end

    # --
    # Whether or not we have sub-pages.
    # --
    def sub_pages?
      size > 0
    end

    # --
    # The size of the pages.
    # --
    def size
      pages.size
    end

    # --
    # Split the URL.
    # --
    private
    def split(url)
      url = url.gsub(/\A\//, "")
      url = url.chomp(File.extname(url))
      url.split("/")
    end
  end
end
