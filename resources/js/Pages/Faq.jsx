import DefaultLayout from '@/Components/compon/DefaultLayout'
import React from 'react'

export default function Faq({auth}) {
  return (
    <DefaultLayout auth={auth}>
  {/* Site header */}
  <header
    className="site-header size-lg text-center"
    style={{ backgroundImage: 'url(storage/upload/bg-banner1.jpg)' }}
  >
    <div className="container">
      <div className="col-xs-12">
        <h1>Frequently asked questions</h1>
        <h5 className="font-alt">
          Probably you'll find your answer here. Contact us if you don't find
          what you're looking for.
        </h5>
        <br />
        <div id="faq-search" className="form-group">
          <i className="ti-search fa-flip-horizontal1" />
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Type to search..."
          />
        </div>
      </div>
    </div>
  </header>
  {/* END Site header */}
  {/* Main container */}
  <main id="faq-result">
    <section>
      <div className="container">
        <header className="section-header text-left">
          <span>Common questions</span>
          <h2>General</h2>
        </header>
        <ul className="faq-items">
          <li>
            <h5>What is TheJobs?</h5>
            <p>
              Quisque eget laoreet odio. Integer rutrum leo in aliquam iaculis.
              Integer vestibulum efficitur magna, sed molestie lectus. Aliquam
              volutpat ut mauris vitae rutrum. Ut vitae nulla in metus varius
              faucibus. Suspendisse consectetur, leo in porttitor euismod, enim
              risus vestibulum nulla, sit amet iaculis nulla orci at dolor.
              Vivamus dictum erat nisi, id hendrerit dui fringilla elementum. Ut
              pretium nisi metus, vitae euismod quam tincidunt ut. Maecenas non
              sem justo. Mauris mollis faucibus elementum. Duis lacinia orci
              vitae vestibulum consectetur.
            </p>
          </li>
          <li>
            <h5>Why Choose TheJobs?</h5>
            <p>
              Sed sed pulvinar nisl. Etiam a nulla purus. Curabitur maximus
              mauris eu ante aliquet pellentesque. Vivamus commodo pulvinar
              dictum. Vivamus vulputate lacus et eleifend rutrum. Fusce
              fringilla molestie maximus. Cras vel lacus quis velit laoreet
              mattis vel eu libero. Maecenas consectetur dictum justo, in
              scelerisque libero lacinia at. Donec a facilisis sem, a viverra
              dui. Morbi vestibulum viverra diam, at rutrum nulla porttitor eu.
            </p>
          </li>
          <li>
            <h5>What are TheJobs features?</h5>
            <p>
              Pellentesque magna justo, ullamcorper eu efficitur sit amet,
              porttitor ut velit. Cras sit amet lorem sit amet purus vestibulum
              feugiat vitae sed tellus. In hac habitasse platea dictumst.
              Aliquam pretium, sem non maximus maximus, diam augue commodo
              augue, at pharetra dui ligula sed nisl. Morbi vitae ullamcorper
              purus. Integer nec arcu in diam suscipit dapibus. Donec vulputate
              tellus vitae accumsan hendrerit.
            </p>
          </li>
          <li>
            <h5>When was TheJobs first released?</h5>
            <p>
              Donec posuere risus ipsum, quis ullamcorper magna pretium eget.
              Sed viverra orci lacinia, cursus massa et, pellentesque ipsum.
              Nulla facilisi. Sed bibendum libero in ante laoreet, et venenatis
              neque scelerisque.
            </p>
          </li>
          <li>
            <h5>Do I need to know PHP to use TheJobs?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra lacus nec lorem blandit, nec cursus orci tempor. Nunc
              consectetur quis nunc in pharetra. Quisque lobortis nisi vel odio
              ultricies fringilla. Sed egestas a justo ut lobortis. In in arcu
              tellus. Nam non ipsum magna. Duis at ante elit. Nullam
              sollicitudin porttitor neque. Integer bibendum, lorem sed
              porttitor efficitur, mi enim volutpat leo, non sodales sem ligula
              non sem. Cras ut rutrum nibh.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section className="bg-alt">
      <div className="container">
        <header className="section-header text-left">
          <span>Bring it up</span>
          <h2>Installation</h2>
        </header>
        <ul className="faq-items">
          <li>
            <h5>How do I Install TheJobs?</h5>
            <p>
              Cras mattis quam ut tortor varius, vel sollicitudin libero congue.
              Pellentesque ac turpis luctus, dictum ante a, efficitur arcu.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nam dignissim efficitur pellentesque. Nunc
              laoreet eu sapien in bibendum. Praesent malesuada lacus ante, at
              vestibulum nulla finibus in.
            </p>
          </li>
          <li>
            <h5>How do I Find a Good Host for My Website?</h5>
            <p>
              Lorem ipsum dolor sit amet test, consectetur adipiscing elit.
              Pellentesque velit leo, fringilla ac facilisis sit amet, posuere
              vitae massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec facilisis finibus nulla vel
              congue.
            </p>
          </li>
          <li>
            <h5>How do I Configure it?</h5>
            <p>
              Ut ac justo posuere, maximus dolor vel, lobortis quam. Sed
              malesuada at magna vitae vestibulum. In hac habitasse platea
              dictumst. Sed a ultrices massa, in commodo tortor. Quisque
              faucibus aliquam urna ultrices tristique. Nunc cursus malesuada
              est eu facilisis. Sed gravida urna eget odio volutpat, ut bibendum
              dolor condimentum.
            </p>
          </li>
          <li>
            <h5>What are the Requirements for Installing TheJobs?</h5>
            <p>
              Etiam venenatis nisi venenatis, consectetur nibh viverra,
              efficitur mauris. Ut efficitur, lorem vel porta sagittis, mi lacus
              gravida tortor, ac porta nunc enim et dui. Nunc vitae auctor ex,
              et porttitor metus. Maecenas tincidunt est urna, id egestas eros
              mollis sed. In commodo quis nisl a malesuada. Donec pretium
              efficitur malesuada. Quisque vitae gravida sem.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div className="container">
        <header className="section-header text-left">
          <span>Layout and styling</span>
          <h2>Design</h2>
        </header>
        <ul className="faq-items">
          <li>
            <h5>How can I choose different styles or colours?</h5>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec venenatis vulputate
              hendrerit. Cras sit amet arcu nulla. Ut tempus laoreet mi, eget
              semper ligula posuere et. Maecenas pretium diam sed neque
              placerat, et sagittis justo euismod. Ut consectetur pulvinar odio
              et blandit. Nullam ut elit malesuada, interdum tortor sed,
              tincidunt est. Cras ut neque eget mauris rutrum feugiat at in
              ante. Interdum et malesuada fames ac ante ipsum.
            </p>
          </li>
          <li>
            <h5>How do I change the size of the popup comments window?</h5>
            <p>
              Aliquam sodales justo a justo fermentum, eu tempor erat rhoncus.
              Morbi egestas iaculis ante a pharetra. Pellentesque molestie, sem
              a dictum blandit, justo ante ultrices est, vitae laoreet arcu
              massa et libero. Phasellus suscipit ipsum sed diam tempus commodo.
              Curabitur aliquet, lectus sit amet accumsan finibus, est erat
              imperdiet erat, non varius ex nisl a purus. Mauris ac orci enim.
              Cras fermentum egestas dolor, id volutpat mi ultricies et.
              Maecenas tincidunt enim elementum orci placerat, et placerat massa
              fermentum. Praesent fermentum lectus eget magna iaculis, vitae
              ultrices mauris porta.
            </p>
          </li>
          <li>
            <h5>
              Where can I find information about styling lists and nested lists?
            </h5>
            <p>
              Etiam congue tortor mauris, vehicula ultrices sem aliquam quis.
              Maecenas consequat posuere sem, pellentesque suscipit nunc dictum
              imperdiet. Curabitur ullamcorper, urna at aliquam fringilla, nibh
              massa tempor purus, id semper ante lectus sit amet metus.
              Suspendisse tincidunt aliquam feugiat. In scelerisque sodales
              mollis. Donec dui risus, iaculis ac odio vel, ornare maximus ex.
              Aenean vitae ipsum eget nisl viverra pharetra eget sed dui.
            </p>
          </li>
          <li>
            <h5>How can I get my categories to display in the order I want?</h5>
            <p>
              Fusce euismod purus tempor enim lacinia, at commodo dui fermentum.
              Sed eu nulla eget enim laoreet cursus. Pellentesque blandit
              posuere magna vel dignissim. Nulla justo neque, lobortis vel
              consectetur at.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section className="bg-alt">
      <div className="container">
        <header className="section-header text-left">
          <span>Keep it safe</span>
          <h2>Security</h2>
        </header>
        <ul className="faq-items">
          <li>
            <h5>What is a “security” issue?</h5>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec venenatis vulputate
              hendrerit. Cras sit amet arcu nulla. Ut tempus laoreet mi, eget
              semper ligula posuere et. Maecenas pretium diam sed neque
              placerat, et sagittis justo euismod. Ut consectetur pulvinar odio
              et blandit.
            </p>
          </li>
          <li>
            <h5>Where do I report security issues?</h5>
            <p>
              Lorem ipsum dolor sit amet test, consectetur adipiscing elit.
              Pellentesque velit leo, fringilla ac facilisis sit amet, posuere
              vitae massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec facilisis finibus nulla vel
              congue.
            </p>
          </li>
          <li>
            <h5>I’ve been hacked. What do I do now?</h5>
            <p>
              Aenean non lorem at elit cursus efficitur at aliquet est. Quisque
              varius enim ante, in vestibulum dui efficitur in. Nullam sit amet
              elit sed tortor posuere finibus a in odio. Duis ac dui finibus,
              mollis massa sit amet, lacinia magna. Sed non tortor sit amet nisi
              fringilla pretium non at mi. Aenean lobortis sapien at condimentum
              tempor. Curabitur vitae purus maximus ligula volutpat feugiat. In
              hac habitasse platea dictumst. Etiam sit amet metus at urna
              dignissim lacinia.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
  {/* END Main container */}
</DefaultLayout>

  )
}
